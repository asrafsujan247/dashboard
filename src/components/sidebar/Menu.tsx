// Import Dependencies
import { useLayoutEffect, useMemo, useState } from "react";
import SimpleBar from "simplebar-react";

// Local Imports
import { Accordion } from "@/components/ui";
import { NavigationTree } from "@/@types/navigation";
import { isRouteActive } from "@/utils/isRouteActive";
import { useDataScrollOverflow, useDidUpdate } from "@/hooks";
import { Divider } from "./Divider";
import { MenuItem } from "./MenuItem";
import { CollapsibleItem } from "./CollapsibleItem";

// ----------------------------------------------------------------------

export function Menu({ nav, pathname }: { nav: NavigationTree[]; pathname: string }) {
  const initialActivePath = useMemo(
    () => nav.find((item) => isRouteActive(item.path, pathname))?.path ?? "",
    [nav, pathname],
  );
  const { ref } = useDataScrollOverflow({ updateDeps: nav });
  const [expanded, setExpanded] = useState(initialActivePath);

  useDidUpdate(() => {
    const activePath = nav.find((item) => isRouteActive(item.path, pathname))?.path;
    if (activePath && expanded !== activePath) setExpanded(activePath);
  }, [nav, pathname]);

  useLayoutEffect(() => {
    ref?.current?.querySelector("[data-menu-active=true]")?.scrollIntoView({ block: "center" });
  }, []);

  return (
    <Accordion value={expanded} onChange={setExpanded} className="flex flex-col overflow-hidden">
      <SimpleBar
        scrollableNodeProps={{ ref }}
        className="h-full overflow-x-hidden pb-6"
        style={{ "--scroll-shadow-size": "32px" } as React.CSSProperties}
      >
        <div className="flex h-full flex-1 flex-col px-4">
          {nav.map((item) => {
            switch (item.type) {
              case "collapse": return <CollapsibleItem key={item.path} data={item} />;
              case "item": return <MenuItem key={item.path} data={item} />;
              case "divider": return <Divider key={item.id} />;
              default: return null;
            }
          })}
        </div>
      </SimpleBar>
    </Accordion>
  );
}
