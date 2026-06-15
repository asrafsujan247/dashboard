// Import Dependencies
import { useLayoutEffect, useMemo, useState } from "react";
import { NavLink, useRouteLoaderData } from "react-router";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import SimpleBar from "simplebar-react";

// Local Imports
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
} from "@/components/ui";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { NavigationTree } from "@/@types/navigation";
import { isRouteActive } from "@/utils/isRouteActive";
import { useDataScrollOverflow, useDidUpdate } from "@/hooks";

// ----------------------------------------------------------------------

const isMobile = () => !window.matchMedia("(min-width: 1280px)").matches;

function Divider() {
  return <div className="my-2.5 h-px bg-gray-200" />;
}

function MenuItem({ data }: { data: NavigationTree }) {
  const close = useSidebarStore((s) => s.close);
  const info = useRouteLoaderData("root")?.[data.id]?.info;

  return (
    <NavLink
      to={data.path as string}
      onClick={() => isMobile() && close()}
      className={({ isActive }) =>
        clsx(
          "outline-hidden transition-colors duration-300 ease-in-out",
          isActive ? "font-medium text-primary-600" : "text-gray-600 hover:text-gray-900",
        )
      }
    >
      {({ isActive }) => (
        <div
          data-menu-active={isActive}
          style={{ height: "34px" }}
          className="flex items-center justify-between text-xs-plus tracking-wide"
        >
          <span className="mr-1 truncate">{data.title}</span>
          {info?.val && (
            <Badge color={info.color} variant="soft" className="h-4.5 min-w-4 shrink-0 p-[5px] text-tiny-plus">
              {info.val}
            </Badge>
          )}
        </div>
      )}
    </NavLink>
  );
}

function CollapsibleMenuItem({ data }: { data: NavigationTree }) {
  const close = useSidebarStore((s) => s.close);
  const info = useRouteLoaderData("root")?.[data.id]?.info;

  return (
    <NavLink
      to={data.path as string}
      onClick={() => isMobile() && close()}
      id={data.id}
      className={({ isActive }) =>
        clsx(
          "text-xs-plus flex items-center justify-between px-2 tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out hover:ltr:pl-4 hover:rtl:pr-4",
          isActive ? "text-primary-600 font-medium" : "text-gray-600 hover:text-gray-900 focus:text-gray-900",
        )
      }
    >
      {({ isActive }) => (
        <div
          data-menu-active={isActive}
          className="flex min-w-0 items-center justify-between"
          style={{ height: "34px" }}
        >
          <div className="flex min-w-0 items-center space-x-2 rtl:space-x-reverse">
            <div
              className={clsx(
                "size-1.5 rounded-full border border-current",
                isActive ? "bg-primary-600 opacity-80" : "opacity-50 transition-all",
              )}
            />
            <span className="truncate">{data.title}</span>
          </div>
          {info?.val && (
            <Badge color={info.color} className="h-5 min-w-5 shrink-0 rounded-full p-[5px]">
              {info.val}
            </Badge>
          )}
        </div>
      )}
    </NavLink>
  );
}

function CollapsibleItem({ data }: { data: NavigationTree }) {
  if (!data.childs) throw new Error("CollapsibleItem must have childs");
  const { childs } = data;

  return (
    <AccordionItem value={data.path ?? data.id}>
      {({ open }: { open: boolean }) => (
        <>
          <AccordionButton
            className={clsx(
              "text-xs-plus flex w-full min-w-0 cursor-pointer items-center justify-between gap-1 py-2 text-start tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out",
              open ? "font-semibold text-gray-800" : "text-gray-600 hover:text-gray-800 focus:text-gray-800",
            )}
          >
            <span className="truncate">{data.title}</span>
            <ChevronRightIcon
              className={clsx("size-4 text-gray-400 transition-transform ease-in-out", open && "rotate-90")}
            />
          </AccordionButton>
          <AccordionPanel>
            {childs.map((i) => (
              <CollapsibleMenuItem key={i.path} data={i} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

function Menu({ nav, pathname }: { nav: NavigationTree[]; pathname: string }) {
  const initialActivePath = useMemo(
    () => nav.find((item) => isRouteActive(item.path, pathname))?.path ?? "",
    [nav, pathname],
  );
  const { ref } = useDataScrollOverflow({ updateDeps: nav });
  const [expanded, setExpanded] = useState(initialActivePath);

  useDidUpdate(() => {
    const activePath = nav.find((item) => isRouteActive(item.path, pathname))?.path;
    if (activePath && expanded !== activePath) setExpanded(activePath);
  }, [nav, pathname]);

  useLayoutEffect(() => {
    ref?.current?.querySelector("[data-menu-active=true]")?.scrollIntoView({ block: "center" });
  }, []);

  return (
    <Accordion value={expanded} onChange={setExpanded} className="flex flex-col overflow-hidden">
      <SimpleBar
        scrollableNodeProps={{ ref }}
        className="h-full overflow-x-hidden pb-6"
        style={{ "--scroll-shadow-size": "32px" } as React.CSSProperties}
      >
        <div className="flex h-full flex-1 flex-col px-4">
          {nav.map((item) => {
            switch (item.type) {
              case "collapse": return <CollapsibleItem key={item.path} data={item} />;
              case "item": return <MenuItem key={item.path} data={item} />;
              case "divider": return <Divider key={item.id} />;
              default: return null;
            }
          })}
        </div>
      </SimpleBar>
    </Accordion>
  );
}

// ----------------------------------------------------------------------

export interface RightPanelProps {
  currentSegment?: NavigationTree;
  pathname: string;
  close: () => void;
}

export function RightPanel({ currentSegment, pathname, close }: RightPanelProps) {
  return (
    <div className="prime-panel flex h-full flex-col border-r border-gray-150">
      <div className="flex h-full grow flex-col bg-white ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)">
        <div className="relative flex h-16 w-full shrink-0 items-center justify-between pl-4 pr-1 rtl:pl-1 rtl:pr-4">
          <p className="truncate text-base tracking-wider text-gray-800">{currentSegment?.title}</p>
          <Button onClick={close} isIcon variant="flat" className="size-7 rounded-full xl:hidden">
            <ChevronLeftIcon className="size-6 rtl:rotate-180" />
          </Button>
        </div>
        {currentSegment?.childs && <Menu nav={currentSegment.childs} pathname={pathname} />}
      </div>
    </div>
  );
}
