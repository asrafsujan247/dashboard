// Import Dependencies
import { RouterProvider } from "react-router";

// Local Imports
import router from "./app/router/router";

// Ensure global stores initialize on app load
import "@/app/store/breakpointStore";
import "@/app/store/sidebarStore";

// ----------------------------------------------------------------------

function App() {
  return <RouterProvider router={router} />;
}

export default App;
