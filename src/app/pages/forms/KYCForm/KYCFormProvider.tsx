import { useEffect } from "react";
import { useKYCFormStore } from "./KYCFormContext";

export function KYCFormProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    useKYCFormStore.getState().reset();
  }, []);

  return <>{children}</>;
}
