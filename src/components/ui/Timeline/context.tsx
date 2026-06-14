import { createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";

export type TimelineVariant = "filled" | "outlined";

export interface TimelineContextType {
  variant: TimelineVariant;
}

export const TimelineStoreContext =
  createContext<StoreApi<TimelineContextType> | null>(null);

export const useTimelineContext = (): TimelineContextType => {
  const store = useContext(TimelineStoreContext);
  if (!store) {
    throw new Error("useTimelineContext must be used within TimelineProvider");
  }
  return useStore(store);
};
