import { useEffect } from "react";
import { useAddProductFormStore } from "./AddProductFormContext";

export function AddProductFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    useAddProductFormStore.getState().reset();
  }, []);

  return <>{children}</>;
}
