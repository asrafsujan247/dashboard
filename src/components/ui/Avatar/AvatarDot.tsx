// Import Dependencies
import { ElementType, forwardRef } from "react";
import clsx from "clsx";

// Local Imports
import { setThisClass } from "@/utils/setThisClass";
import { ColorType } from "@/constants/app";

// ----------------------------------------------------------------------

export interface AvatarDotProps {
  component?: ElementType;
  color?: ColorType | "neutral";
  className?: string;
  [key: string]: any;
}

export const AvatarDot = forwardRef<HTMLElement, AvatarDotProps>(
  ({ component: Component = "span", color = "neutral", className, ...rest }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(
          "absolute block size-2.5 rounded-full border-2 border-white",
          color === "neutral" ? "bg-gray-400" : ["bg-this", setThisClass(color as Exclude<typeof color, "neutral">)],
          className,
        )}
        {...rest}
      />
    );
  },
);

AvatarDot.displayName = "AvatarDot";
