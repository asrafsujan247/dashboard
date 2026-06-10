// Import Dependencies
import { Toaster as SonnerToaster } from "sonner";

// ----------------------------------------------------------------------

export default function Toaster() {
  return (
    <SonnerToaster
      theme="light"
      offset="16px"
      position="top-right"
      expand={false}
      visibleToasts={2}
      richColors
    />
  );
}
