// Import Dependencies
import { Outlet } from "react-router";
import { useLayoutEffect } from "react";

// Local Imports
import { useSidebarStore } from "@/app/store/sidebarStore";
import { useBreakpointsStore } from "@/app/store/breakpointStore";

// ----------------------------------------------------------------------

export function AppLayout() {
  const { close, open } = useSidebarStore();
  const { lgAndDown, xlAndUp } = useBreakpointsStore();

  useLayoutEffect(() => {
    if (xlAndUp) open();
    return () => {
      if (lgAndDown) close();
    };
  }, [close, lgAndDown, open, xlAndUp]);

  useLayoutEffect(() => {
    if (document?.body?.dataset) {
      let cancelled = false;

      document.body.dataset.layout = "main-layout";

      // Fix flicker layout
      queueMicrotask(() => {
        if (cancelled) return;
        document.body.dataset.layout = "main-layout";
      });

      return () => {
        cancelled = true;
        document.body.dataset.layout = "main-layout";
      };
    }
  }, []);

  return <Outlet />;
}
