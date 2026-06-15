// Import Dependencies
import { NavLink, useRouteLoaderData } from "react-router";
import clsx from "clsx";

// Local Imports
import { Badge } from "@/components/ui";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { NavigationTree } from "@/@types/navigation";

// ----------------------------------------------------------------------

const isMobile = () => !window.matchMedia("(min-width: 1280px)").matches;

export function MenuItem({ data }: { data: NavigationTree }) {
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
