import { createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";

export interface PaginationContextType {
  total: number;
  range: (number | string)[];
  active: number;
  disabled?: boolean;
  classNames?: Record<string, string>;
  onChange: (page: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onFirst: () => void;
  onLast: () => void;
  getItemProps?: (page: number) => Record<string, unknown>;
}

export const PaginationStoreContext =
  createContext<StoreApi<PaginationContextType> | null>(null);

export const usePaginationContext = (): PaginationContextType => {
  const store = useContext(PaginationStoreContext);
  if (!store) {
    throw new Error("Pagination component was not found in tree");
  }
  return useStore(store);
};
