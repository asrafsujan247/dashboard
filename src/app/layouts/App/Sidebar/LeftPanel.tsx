// Import Dependencies
import { ElementType, Dispatch, SetStateAction } from "react";
import { Link } from "react-router";

// Local Imports
import Logo from "@/assets/appLogo.svg?react";
import { ScrollShadow } from "@/components/ui";
import { useSidebarStore } from "@/app/store/sidebarStore";
import { settings } from "@/app/navigation/segments/settings";
import { NavigationTree } from "@/@types/navigation";
import { Item } from "@/components/sidebar/Item";
import { Profile } from "@/components/sidebar/Profile";
import { SegmentPath } from ".";

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
          <Link to="/"><Logo className="text-primary-600 size-10" /></Link>
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
