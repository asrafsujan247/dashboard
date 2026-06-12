// Import Dependencies
import clsx from "clsx";
import { NavLink, To } from "react-router";

// Local Imports
import { Header } from "./Header";
import { Button, ScrollShadow } from "@/components/ui";
import { createScopedKeydownHandler } from "@/utils/dom/createScopedKeydownHandler";
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { settings } from "@/app/navigation/segments/settings";
import { navigationIcons } from "@/app/navigation/icons";

// ----------------------------------------------------------------------

export function SidebarPanel() {
  return (
    <div
      className={clsx(
        "prime-panel flex flex-col  ltr:border-r rtl:border-l",
      )}
    >
      <div
        className={clsx(
          "flex h-full grow flex-col bg-white  ltr:pl-(--main-panel-width) rtl:pr-(--main-panel-width)",
        )}
      >
        <Header />
        <ScrollShadow className="grow">
          <ul className="space-y-1.5 px-2 font-medium" data-menu-list>
            {settings.childs?.map((item) => (
              <li key={item.path}>
                <MenuItem 
                  title={item.title ?? ""}
                  transKey={item.transKey ?? ""}
                  icon={item.icon ?? ""}
                  path={item.path ?? ""}
                />
              </li>
            ))}
          </ul>

        </ScrollShadow>
      </div>
    </div>
  );
}

function MenuItem({
  title,
  transKey,
  icon,
  path,
  ...rest
}: {
  title: string;
  transKey: string;
  icon: string;
  path: To;
}) {
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();

  if (!icon || !navigationIcons[icon]) {
    throw new Error(`Icon ${icon} not found in navigationIcons`);
  }
  
  const Icon = navigationIcons[icon];
  
  return (
    <NavLink to={path} {...rest}>
      {({ isActive, isPending }) => (
        <Button
          variant="flat"
          color={isActive ? "primary" : "neutral"}
          className={clsx(
            "group text-xs-plus w-full justify-start gap-2 p-2",
            isPending && "opacity-80",
          )}
          onKeyDown={createScopedKeydownHandler({
            siblingSelector: "[data-menu-list-item]",
            parentSelector: "[data-menu-list]",
            activateOnFocus: true,
            loop: true,
            orientation: "vertical",
          })}
          data-menu-list-item
          onClick={() => lgAndDown && close()}
        >
          {Icon && (
            <Icon
              className={clsx(
                isActive
                  ? "text-this"
                  : "  text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500",
                "size-4.5 transition-colors",
              )}
            />
          )}
          <span>{title}</span>
        </Button>
      )}
    </NavLink>
  );
}
