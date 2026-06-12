// Import Dependencies
import { RouterProvider } from "react-router";

// Local Imports
import { BreakpointProvider } from "@/app/contexts/breakpoint/Provider";
import { SidebarProvider } from "@/app/contexts/sidebar/Provider";
import router from "./app/router/router";

// ----------------------------------------------------------------------

function App() {
  return (
    <BreakpointProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </BreakpointProvider>
  );
}

export default App;
