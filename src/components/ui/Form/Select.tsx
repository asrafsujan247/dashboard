// Import Dependencies
import { forwardRef, ReactNode } from "react";
import clsx from "clsx";

// Local Imports
import { useId } from "@/hooks";

// ----------------------------------------------------------------------

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode;
  description?: string;
  error?: boolean | ReactNode;
  data?: (string | number | { value: string | number; label: string })[];
  classNames?: {
    root?: string;
    label?: string;
    select?: string;
    error?: string;
    description?: string;
  };
  unstyled?: boolean;
  id?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      description,
      error,
      className,
      classNames = {},
      unstyled,
      disabled,
      data,
      children,
      id,
      ...rest
    },
    ref,
  ) => {
    const selectId = useId(id, "select");

    return (
      <div className={clsx("input-root", classNames.root)}>
        {label && (
          <label
            htmlFor={selectId}
            className={clsx("input-label", classNames.label)}
          >
            {label}
          </label>
        )}
        <div className={clsx("input-wrapper", label && "mt-1.5")}>
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={clsx(
              "form-input-base w-full",
              !unstyled && [
                "form-select",
                error
                  ? "border-error"
                  : disabled
                    ? "bg-gray-150 cursor-not-allowed border-gray-300 opacity-60"
                    : "focus:border-primary-600 border-gray-300 hover:border-gray-400",
              ],
              className,
              classNames.select,
            )}
            {...rest}
          >
            {data
              ? data.map((item, i) => {
                  const value =
                    typeof item === "object" ? String(item.value) : String(item);
                  const label =
                    typeof item === "object" ? item.label : String(item);
                  return (
                    <option key={i} value={value}>
                      {label}
                    </option>
                  );
                })
              : children}
          </select>
        </div>
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

Select.displayName = "Select";
