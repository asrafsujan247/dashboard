// Import Dependencies
import { useTransition } from "react";
import clsx from "clsx";

// Local Imports
import { useSidebarStore } from "@/app/store/sidebarStore";

// ----------------------------------------------------------------------

export function SidebarToggleBtn() {
  const toggle = useSidebarStore((s) => s.toggle);
  const isExpanded = useSidebarStore((s) => s.isExpanded);
  const [, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(toggle)}
      className={clsx(
        isExpanded && "active",
        "sidebar-toggle-btn cursor-pointer flex size-7 flex-col justify-center space-y-1.5 text-primary-600 outline-hidden focus:outline-hidden ltr:ml-0.5 rtl:mr-0.5",
      )}
    >
      <span />
      <span />
      <span />
    </button>
  );
}
