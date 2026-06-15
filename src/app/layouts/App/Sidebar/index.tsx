// Import Dependencies
import { useMemo, useState } from "react";
import { useLocation } from "react-router";

// Local Imports
import { useSidebarStore } from "@/app/store/sidebarStore";
import { navigation } from "@/app/navigation";
import { useDidUpdate, useMediaQuery } from "@/hooks";
import { isRouteActive } from "@/utils/isRouteActive";
import { LeftPanel } from "./LeftPanel";
import { RightPanel } from "./RightPanel";

// ----------------------------------------------------------------------

export type SegmentPath = string | undefined;

export function Sidebar() {
  const { pathname } = useLocation();
  const isExpanded = useSidebarStore((s) => s.isExpanded);
  const close = useSidebarStore((s) => s.close);
  const isLgAndDown = !useMediaQuery("(min-width: 1280px)");

  const initialSegment = useMemo(
    () => navigation.find((item) => isRouteActive(item.path, pathname)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const [activeSegmentPath, setActiveSegmentPath] = useState<SegmentPath>(
    initialSegment?.path,
  );

  const currentSegment = useMemo(() => {
    return navigation.find((item) => item.path === activeSegmentPath);
  }, [activeSegmentPath]);

  useDidUpdate(() => {
    const activePath = navigation.find((item) =>
      isRouteActive(item.path, pathname),
    )?.path;
    setActiveSegmentPath(activePath);
  }, [pathname]);

  useDidUpdate(() => {
    if (isLgAndDown && isExpanded) close();
  }, [isLgAndDown]);

  return (
    <>
      <LeftPanel
        nav={navigation}
        activeSegmentPath={activeSegmentPath}
        setActiveSegmentPath={setActiveSegmentPath}
      />
      <RightPanel
        close={close}
        currentSegment={currentSegment}
        pathname={pathname}
      />
    </>
  );
}
