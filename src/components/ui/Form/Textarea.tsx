// Import Dependencies
import { ElementType, forwardRef, ForwardedRef, ReactNode } from "react";
import clsx from "clsx";

// Local Imports
import { useId } from "@/hooks";
import { InputErrorMsg } from "./InputErrorMsg";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/@types/polymorphic";

// ----------------------------------------------------------------------

export type TextareaOwnProps<T extends ElementType = "textarea"> = {
  component?: T;
  label?: ReactNode;
  description?: string;
  error?: boolean | ReactNode;
  classNames?: {
    root?: string;
    label?: string;
    textarea?: string;
    error?: string;
    description?: string;
  };
  unstyled?: boolean;
  disabled?: boolean;
  id?: string;
};

export type TextareaProps<E extends ElementType = "textarea"> =
  PolymorphicComponentProps<E, TextareaOwnProps<E>>;

const TextareaInner = forwardRef(
  <T extends ElementType = "textarea">(props: any, ref: ForwardedRef<any>) => {
    const {
      component,
      label,
      description,
      error,
      className,
      classNames = {},
      unstyled,
      disabled,
      id,
      ...rest
    } = props as TextareaProps<T>;

    const Component: ElementType = component || "textarea";
    const textareaId = useId(id, "textarea");

    return (
      <div className={clsx("input-root", classNames.root)}>
        {label && (
          <label
            htmlFor={textareaId}
            className={clsx("input-label", classNames.label)}
          >
            {label}
          </label>
        )}
        <div className={clsx("input-wrapper", label && "mt-1.5")}>
          <Component
            ref={ref}
            id={textareaId}
            disabled={disabled}
            className={clsx(
              "form-input-base w-full",
              !unstyled && [
                "form-input",
                error
                  ? "border-error"
                  : disabled
                    ? "bg-gray-150 cursor-not-allowed border-gray-300 opacity-60"
                    : "focus:border-primary-600 border-gray-300 hover:border-gray-400",
              ],
              className,
              classNames.textarea,
            )}
            {...rest}
          />
        </div>
        <InputErrorMsg
          when={!!error && typeof error !== "boolean"}
          className={classNames.error}
        >
          {error}
        </InputErrorMsg>
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

type TextareaComponent = (<E extends ElementType = "textarea">(
  props: TextareaProps<E> & { ref?: PolymorphicRef<E> },
) => React.ReactNode) & { displayName?: string };

export const Textarea = TextareaInner as TextareaComponent;
(Textarea as any).displayName = "Textarea";
