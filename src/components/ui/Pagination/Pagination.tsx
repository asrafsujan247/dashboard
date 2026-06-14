// Import Dependencies
import { ReactNode, forwardRef, useRef } from "react";
import { createStore, type StoreApi } from "zustand";
import clsx from "clsx";

// Local Imports
import { PaginationContextType, PaginationStoreContext } from "./Pagination.context";
import { usePagination } from "./usePagination";
import { createEventHandler } from "@/utils/createEventHandler";

// ----------------------------------------------------------------------

export type PaginationProps = {
  total: number;
  value?: number;
  defaultValue?: number;
  onChange?: (page: number) => void;
  disabled?: boolean;
  getItemProps?: (page: number) => Record<string, unknown>;
  className?: string;
  classNames?: Record<string, string>;
  siblings?: number;
  boundaries?: number;
  children?: ReactNode;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  onFirstPage?: () => void;
  onLastPage?: () => void;
};

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      total,
      value,
      defaultValue,
      onChange,
      disabled,
      getItemProps,
      className,
      classNames = {},
      siblings = 1,
      boundaries = 1,
      children,
      onNextPage,
      onPreviousPage,
      onFirstPage,
      onLastPage,
    } = props;

    const { range, setPage, next, previous, active, first, last } =
      usePagination({
        page: value,
        initialPage: defaultValue,
        onChange,
        total,
        siblings,
        boundaries,
      });

    const handleNextPage = createEventHandler(onNextPage, next);
    const handlePreviousPage = createEventHandler(onPreviousPage, previous);
    const handleFirstPage = createEventHandler(onFirstPage, first);
    const handleLastPage = createEventHandler(onLastPage, last);

    if (total <= 0) {
      return null;
    }

    const contextValue: PaginationContextType = {
      total,
      range,
      active,
      disabled,
      classNames,
      onChange: setPage,
      onNext: handleNextPage,
      onPrevious: handlePreviousPage,
      onFirst: handleFirstPage,
      onLast: handleLastPage,
      getItemProps,
    };

    const storeRef = useRef<StoreApi<PaginationContextType> | null>(null);
    if (!storeRef.current) {
      storeRef.current = createStore<PaginationContextType>(() => contextValue);
    } else {
      storeRef.current.setState(contextValue, true);
    }

    return (
      <PaginationStoreContext.Provider value={storeRef.current}>
        <div
          ref={ref}
          className={clsx(
            "this:primary pagination hide-scrollbar max-w-full overflow-x-auto",
            className,
            classNames?.root,
          )}
        >
          {children}
        </div>
      </PaginationStoreContext.Provider>
    );
  },
);
