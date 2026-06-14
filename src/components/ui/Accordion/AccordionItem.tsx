// Import Dependencies
import { ElementType, ReactNode, forwardRef, ForwardedRef, useRef } from "react";
import { createStore, type StoreApi } from "zustand";

// Local Imports
import { AccordionItemStoreContext } from "./AccordionItem.context";
import { useAccordionContext } from "./Accordion.context";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/@types/polymorphic";

// -----------------------------------------------------------------------------

type AccordionItemOwnProps<E extends ElementType = "div"> = {
  children?: ReactNode | ((props: { open: boolean }) => ReactNode);
  className?: string | ((props: { open: boolean }) => string);
  value: string;
  component?: E;
};

export type AccordionItemProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, AccordionItemOwnProps<E>>;

const AccordionItemInner = forwardRef(
  <E extends ElementType = "div">(props: any, ref: ForwardedRef<any>) => {
    const { children, className, value, component, ...rest } =
      props as AccordionItemProps<E>;

    const ctx = useAccordionContext();
    const isActive = ctx.isItemActive(value);

    const Component = component || "div";

    const itemStoreRef = useRef<StoreApi<{ value: string }> | null>(null);
    if (!itemStoreRef.current) {
      itemStoreRef.current = createStore<{ value: string }>(() => ({ value }));
    } else {
      itemStoreRef.current.setState({ value }, true);
    }

    return (
      <AccordionItemStoreContext.Provider value={itemStoreRef.current}>
        <Component
          data-state={isActive ? "open" : undefined}
          className={
            typeof className === "function"
              ? className({ open: isActive })
              : className
          }
          ref={ref}
          {...rest}
        >
          {typeof children === "function"
            ? children({ open: isActive })
            : children}
        </Component>
      </AccordionItemStoreContext.Provider>
    );
  },
);

type AccordionItemComponent = (<E extends ElementType = "div">(
  props: AccordionItemProps<E> & { ref?: PolymorphicRef<E> },
) => ReactNode) & { displayName?: string };

const AccordionItem = AccordionItemInner as AccordionItemComponent;
AccordionItem.displayName = "AccordionItem";

export { AccordionItem };
