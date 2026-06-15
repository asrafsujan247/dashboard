// Import Dependencies
import { ElementType, ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import { Link, type To, useRouteLoaderData } from "react-router";
import clsx from "clsx";

// Local Imports
import Logo from "@/assets/appLogo.svg?react";
import { Badge, ScrollShadow } from "@/components/ui";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { navigationIcons } from "@/app/navigation/icons";
import { createScopedKeydownHandler } from "@/utils/dom/createScopedKeydownHandler";
import { settings } from "@/app/navigation/segments/settings";
import { NavigationTree } from "@/@types/navigation";
import { ColorType } from "@/constants/app";
import { Profile } from "@/components/shared/Profile";
import { useMediaQuery } from "@/hooks";
import { SegmentPath } from ".";

// ----------------------------------------------------------------------

interface ItemProps {
  id: string;
  title: string;
  to?: To;
  isActive?: boolean;
  icon?: string;
  component?: ElementType;
  onClick?: (path: string) => void;
  onKeyDown?: ComponentPropsWithoutRef<"button">["onKeyDown"];
}

function Item({ id, title, isActive, icon, component, onKeyDown, ...rest }: ItemProps) {
  if (!icon || !navigationIcons[icon]) {
    throw new Error(`Icon ${icon} not found in navigationIcons`);
  }

  const Element = component || "button";
  const showTooltip = useMediaQuery("(min-width: 1280px)");
  const info = useRouteLoaderData("root")?.[id]?.info as { val?: string; color?: ColorType } | undefined;
  const Icon = navigationIcons[icon];

  return (
    <Element
      data-root-menu-item
      data-tooltip={showTooltip ? true : undefined}
      data-tooltip-content={title}
      data-tooltip-place="right"
      className={clsx(
        "relative flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg outline-hidden transition-colors duration-200",
        isActive
          ? "bg-primary-600/10 text-primary-600"
          : "hover:bg-primary-600/20 focus:bg-primary-600/20 active:bg-primary-600/25 text-gray-500",
      )}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: "[data-root-menu-item]",
        parentSelector: "[data-root-menu]",
        activateOnFocus: false,
        loop: true,
        orientation: "vertical",
        onKeyDown,
      })}
      {...rest}
    >
      <Icon className="size-7" />
      {info?.val && (
        <Badge
          color={info.color}
          className="text-tiny-plus absolute top-0 right-0 -m-1 h-4 min-w-4 rounded-full px-1 py-0 ring-1 ring-white"
        >
          <span>{info.val}</span>
        </Badge>
      )}
    </Element>
  );
}

// ----------------------------------------------------------------------

export interface LeftPanelProps {
  nav: NavigationTree[];
  setActiveSegmentPath?: Dispatch<SetStateAction<SegmentPath>>;
  activeSegmentPath: SegmentPath;
}

export function LeftPanel({ nav, setActiveSegmentPath, activeSegmentPath }: LeftPanelProps) {
  const isExpanded = useSidebarStore((s) => s.isExpanded);
  const open = useSidebarStore((s) => s.open);

  const handleSegmentSelect = (path: string) => {
    setActiveSegmentPath?.(path);
    if (!isExpanded) open();
  };

  const getItemProps = ({ path, type, title }: NavigationTree) => {
    const isLink = type === "item";
    return {
      component: isLink ? Link : ("button" as ElementType),
      ...(isLink ? { to: path } : {}),
      onClick: isLink ? undefined : () => handleSegmentSelect(path as string),
      isActive: path === activeSegmentPath,
      title: title as string,
    };
  };

  return (
    <div className="main-panel">
      <div className="border-gray-150 flex h-full w-full flex-col items-center bg-white ltr:border-r rtl:border-l">
        <div className="flex pt-3.5">
          <Link to="/">
            <Logo className="text-primary-600 size-10" />
          </Link>
        </div>
        <ScrollShadow
          data-root-menu
          className="hide-scrollbar flex w-full grow flex-col items-center space-y-4 overflow-y-auto pt-5 lg:space-y-3 xl:pt-5 2xl:space-y-4"
        >
          {nav.map((item) => (
            <Item key={item.path} {...getItemProps(item)} id={item.id} icon={item.icon} />
          ))}
        </ScrollShadow>
        <div className="flex flex-col items-center space-y-3 py-2.5">
          <Item
            id={settings.id}
            component={Link}
            to="/settings/general"
            title="Settings"
            isActive={activeSegmentPath === settings.path}
            icon={settings.icon}
          />
          <Profile />
        </div>
      </div>
    </div>
  );
}
