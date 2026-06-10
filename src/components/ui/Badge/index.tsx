// Import Dependencies
import React, { ElementType, ForwardedRef, forwardRef, ReactNode } from "react";
import clsx from "clsx";

// Local Imports
import { ColorType } from "@/constants/app";
import { setThisClass } from "@/utils/setThisClass";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/@types/polymorphic";

// ----------------------------------------------------------------------

type Variant = "filled" | "outlined" | "soft";

type BadgeOwnProps<T extends ElementType = "div"> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
  variant?: Variant;
  color?: ColorType;
  unstyled?: boolean;
  isGlow?: boolean;
};

export type BadgeProps<E extends ElementType = "div"> =
  PolymorphicComponentProps<E, BadgeOwnProps<E>>;

const variants: Record<Variant, string> = {
  filled: "text-white bg-this",
  outlined:
    "border border-this/30 text-this",
  soft: "text-this-darker bg-this-darker/[0.07]"
};

const neutralVariants: Record<Variant, string> = {
  filled: "bg-gray-200 text-gray-900",
  outlined:
    "border border-gray-300 text-gray-900",
  soft: "bg-gray-200/30 text-gray-900"
};

const BadgeInner = forwardRef(
  <E extends ElementType = "div">(
    props: any,
    ref: ForwardedRef<any>,
  ) => {
    const {
      component,
      className,
      unstyled,
      variant = "filled",
      color = "neutral",
      isGlow,
      children,
      ...rest
    } = props as BadgeProps<E>;
    const Component = component || "div";

    return (
      <Component
        className={clsx(
          "badge-base",
          !unstyled && [
            "badge",
            color === "neutral"
              ? [
                neutralVariants[variant],
                isGlow &&
                " shadow-lg shadow-gray-200/50",
              ]
              : [
                setThisClass(color),
                variants[variant],
                isGlow &&
                "shadow-this/50 shadow-lg",
              ],
          ],
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

type BadgeComponent = (<E extends ElementType = "div">(
  props: BadgeProps<E> & { ref?: PolymorphicRef<E> },
) => ReactNode) & { displayName?: string };

const Badge = BadgeInner as BadgeComponent;
Badge.displayName = "Badge";

export { Badge };
