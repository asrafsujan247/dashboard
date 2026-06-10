import { ReactNode } from "react";
import clsx from "clsx";

// ----------------------------------------------------------------------

interface InputErrorMsgProps {
  when?: boolean;
  className?: string;
  children?: ReactNode;
}

export function InputErrorMsg({ when, className, children }: InputErrorMsgProps) {
  if (!when) return null;
  return (
    <p className={clsx("mt-1 text-xs text-error", className)}>{children}</p>
  );
}
