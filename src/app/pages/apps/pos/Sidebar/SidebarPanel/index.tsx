// Import Dependencies
import clsx from "clsx";
import { LockClosedIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Button } from "@/components/ui";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Channels } from "./Channels";
import { Menu } from "./Menu";

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
        {/* Sidebar Content */}
        <div className="hide-scrollbar grow overflow-y-auto">
          <div className="px-4 pt-2">
            <Button variant="outlined" className="w-full gap-2 rounded-full">
              <LockClosedIcon className="size-4 stroke-2 text-this-error" />
              <span>Lock Screen</span>
            </Button>
          </div>
          <Channels />
          <div className="mx-4 my-4 h-px bg-gray-200" />
          <Menu />
          <div className="p-4">
            <p>Sales Today</p>
            <p className="mt-1 text-base font-medium text-gray-800">
              134.55$
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
