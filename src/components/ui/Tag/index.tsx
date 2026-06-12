// Import Dependencies
import clsx from "clsx";
import {
  ElementType,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardedRef,
  ReactNode,
} from "react";

// Local Imports
import { ColorType } from "@/constants/app";
import { setThisClass } from "@/utils/setThisClass";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/@types/polymorphic";

// ----------------------------------------------------------------------

type Variant = "filled" | "outlined" | "soft";

type TagOwnProps<T extends ElementType = "a"> = {
  component?: T;
  className?: string;
  children?: React.ReactNode;
  color?: ColorType;
  unstyled?: boolean;
  variant?: Variant;
  isGlow?: boolean;
} & ComponentPropsWithoutRef<T>;

export type TagProps<E extends ElementType = "a"> = PolymorphicComponentProps<
  E,
  TagOwnProps<E>
>;

const variants: Record<Variant, string> = {
  filled:
    "bg-this text-white hover:bg-this-darker focus:bg-this-darker active:bg-this-darker/90 disabled:bg-this-light",
  outlined:
    "border border-gray-300 text-this hover:border-this focus:border-this",
  soft: "text-this-darker bg-this-darker/[0.07] hover:text-white hover:bg-this-darker focus:text-white focus:bg-this-darker"
};

const neutralVariants: Record<Variant, string> = {
  filled:
    "bg-gray-150 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 active:bg-gray-200/80",
  outlined:
    "border border-gray-300 text-gray-800 hover:border-gray-800 focus:border-gray-800",
  soft: "text-this-darker bg-gray-150/10 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-150 focus:bg-gray-150 active:bg-gray-150/80"
};

const TagInner = forwardRef(
  <E extends ElementType = "a">(props: TagProps<E>, ref: ForwardedRef<any>) => {
    const {
      component,
      className,
      children,
      color = "neutral",
      unstyled,
      variant = "filled",
      isGlow,
      ...rest
    } = props as TagProps<E>;
    const Component = component || "a";

    return (
      <Component
        className={clsx(
          "tag-base",
          !unstyled && [
            "tag",
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

type TagComponent = (<E extends ElementType = "a">(
  props: TagProps<E> & { ref?: PolymorphicRef<E> },
) => ReactNode) & { displayName?: string };

const Tag = TagInner as TagComponent;
Tag.displayName = "Tag";

export { Tag };
