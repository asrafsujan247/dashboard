// Import Dependencies
import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

// Local Imports
import { useId } from "@/hooks";

// ----------------------------------------------------------------------

export interface RangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  description?: string;
  classNames?: {
    root?: string;
    label?: string;
    input?: string;
    description?: string;
  };
  id?: string;
}

export const Range = forwardRef<HTMLInputElement, RangeProps>(
  ({ label, description, className, classNames = {}, id, ...rest }, ref) => {
    const inputId = useId(id, "range");

    return (
      <div className={clsx("input-root", classNames.root)}>
        {label && (
          <label
            htmlFor={inputId}
            className={clsx("input-label", classNames.label)}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          type="range"
          id={inputId}
          className={clsx("form-range w-full", className, classNames.input)}
          {...rest}
        />
        {description && (
          <span
            className={clsx(
              "input-description mt-1 text-xs text-gray-400",
              classNames.description,
            )}
          >
            {description}
          </span>
        )}
      </div>
    );
  },
);

Range.displayName = "Range";
