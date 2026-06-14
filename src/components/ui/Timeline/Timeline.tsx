// Import Dependencies
import { CSSProperties, ReactNode, useRef } from "react";
import { createStore, type StoreApi } from "zustand";
import clsx from "clsx";

// Local Imports
import { TimelineContextType, TimelineStoreContext, TimelineVariant } from "./context";

// ----------------------------------------------------------------------

export interface TimelineProps {
  className?: string;
  pointSize?: string;
  lineWidth?: string;
  variant?: TimelineVariant;
  lineSpace?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

const Timeline = (props: TimelineProps) => {
  const {
    className,
    pointSize = "0.75rem",
    lineWidth = "1px",
    variant = "filled",
    lineSpace,
    style,
    children,
  } = props;

  const contextValue: TimelineContextType = { variant };

  const storeRef = useRef<StoreApi<TimelineContextType> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore<TimelineContextType>(() => contextValue);
  } else {
    storeRef.current.setState(contextValue, true);
  }

  return (
    <TimelineStoreContext.Provider value={storeRef.current}>
      <div
        className={clsx(
          "timeline flex flex-col",
          lineSpace && "line-space",
          className,
        )}
        style={
          {
            "--timeline-point-size": pointSize,
            "--timeline-line-width": lineWidth,
            "--timeline-line-space": lineSpace,
            ...style,
          } as CSSProperties
        }
      >
        {children}
      </div>
    </TimelineStoreContext.Provider>
  );
};

Timeline.displayName = "Timeline";

export { Timeline };
