import { createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";

interface AccordionItemContextType {
  value: string;
}

export const AccordionItemStoreContext =
  createContext<StoreApi<AccordionItemContextType> | null>(null);

export const useAccordionItemContext = (): AccordionItemContextType => {
  const store = useContext(AccordionItemStoreContext);
  if (!store) {
    throw new Error(
      "useAccordionItemContext must be used within AccordionItemProvider",
    );
  }
  return useStore(store);
};
