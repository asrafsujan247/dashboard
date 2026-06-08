// Import Dependencies
import { RouterProvider } from "react-router";

// Local Imports
import { AuthProvider } from "@/app/contexts/auth/Provider";
import { BreakpointProvider } from "@/app/contexts/breakpoint/Provider";
import { SidebarProvider } from "@/app/contexts/sidebar/Provider";
import { ThemeProvider } from "@/app/contexts/theme/Provider";
import router from "./app/router/router";

// ----------------------------------------------------------------------

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BreakpointProvider>
          <SidebarProvider>
            <RouterProvider router={router} />
          </SidebarProvider>
        </BreakpointProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
