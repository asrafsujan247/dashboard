// Import Dependencies
import { NavLink, useRouteLoaderData } from "react-router";
import clsx from "clsx";

// Local Imports
import { Badge } from "@/components/ui";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { NavigationTree } from "@/@types/navigation";

// ----------------------------------------------------------------------

const isMobile = () => !window.matchMedia("(min-width: 1280px)").matches;

export function CollapsibleMenuItem({ data }: { data: NavigationTree }) {
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
