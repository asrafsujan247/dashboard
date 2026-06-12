// Import Dependencies
import { ElementType, ReactNode, forwardRef, ForwardedRef } from "react";
import clsx from "clsx";

// Local Imports
import { ColorType } from "@/constants/app";
import { setThisClass } from "@/utils/setThisClass";
import {
  PolymorphicRef,
  PolymorphicComponentProps,
} from "@/@types/polymorphic";

// ----------------------------------------------------------------------

type Variant = "filled" | "outlined" | "soft" | "flat";

type ButtonOwnProps<E extends ElementType = "button"> = {
  children?: ReactNode;
  color?: ColorType;
  isIcon?: boolean;
  variant?: Variant;
  unstyled?: boolean;
  isGlow?: boolean;
  component?: E;
}

export type ButtonProps<E extends ElementType = "button"> =
  PolymorphicComponentProps<E, ButtonOwnProps<E>>;

const variants: Record<Variant, string> = {
  filled:
    "bg-this text-white hover:bg-this-darker focus:bg-this-darker active:bg-this-darker/90 disabled:bg-this-light",
  soft: "text-this-darker bg-this-darker/[.08] hover:bg-this-darker/[.15] focus:bg-this-darker/[.15] active:focus:bg-this-darker/20",
  outlined:
    "text-this-darker border border-this-darker hover:bg-this-darker/[.05] focus:bg-this-darker/[.05] active:bg-this-darker/10",
  flat: "text-this-darker hover:bg-this-darker/[.08] focus:bg-this-darker/[.08] active:bg-this-darker/[.15]"
};

const neutralVariants: Record<Variant, string> = {
  filled:
    "bg-gray-150 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200/80",
  soft: "bg-gray-150/30 text-gray-900 hover:bg-gray-200/[.15] focus:bg-gray-200/[.15] active:bg-gray-200/20",
  outlined:
    "border border-gray-300 hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-900 active:bg-gray-300/25",
  flat: "hover:bg-gray-300/20 focus:bg-gray-300/20 text-gray-700 active:bg-gray-300/25"
};

const ButtonInner = forwardRef(
  <E extends ElementType = "button">(
    props: any,
    ref: ForwardedRef<any>,
  ) => {
    const {
      component,
      className,
      children,
      color = "neutral",
      isIcon = false,
      variant = "filled",
      unstyled = false,
      isGlow = false,
      type: buttonType,
      ...rest
    } = props as ButtonProps<E>;
    const Component = component || "button";
    const { disabled, ...propsRest } = rest;

    const type = Component === "button" ? buttonType || "button" : undefined;

    return (
      <Component
        ref={ref}
        type={type}
        className={clsx(
          "btn-base",
          !unstyled
            ? [
              "btn",
              isIcon && "shrink-0 p-0",
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
                  "shadow-soft shadow-this/50",
                ],
            ]
            : color !== "neutral" && setThisClass(color),
          className,
        )}
        disabled={Component === "button" ? disabled : undefined}
        data-disabled={disabled}
        {...propsRest}
      >
        {children}
      </Component>
    );
  },
);

type ButtonComponent = (<E extends ElementType = "button">(
  props: ButtonProps<E> & { ref?: PolymorphicRef<E> },
) => ReactNode) & { displayName?: string };

const Button = ButtonInner as ButtonComponent;
Button.displayName = "Button";

export { Button };
