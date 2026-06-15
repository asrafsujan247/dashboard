// Import Dependencies
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

// Local Imports
import { Button } from "@/components/ui";
import { NavigationTree } from "@/@types/navigation";
import { Menu } from "@/components/sidebar/Menu";

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
