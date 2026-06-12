import { createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";

export type AccordionContextType = {
  isItemActive: (value: string) => boolean;
  onChange: (value: string) => void;
  buttonId: string;
  panelId: string;
  transitionDuration?: number;
  loop?: boolean;
};

export const AccordionStoreContext =
  createContext<StoreApi<AccordionContextType> | null>(null);

export const useAccordionContext = (): AccordionContextType => {
  const store = useContext(AccordionStoreContext);
  if (!store) {
    throw new Error("useAccordionContext must be used within AccordionProvider");
  }
  return useStore(store);
};
