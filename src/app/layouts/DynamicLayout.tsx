// Import Dependencies
import { lazy } from "react";

// Local Imports
import { Loadable } from "@/components/shared/Loadable";
import { SplashScreen } from "@/components/template/SplashScreen";

// ----------------------------------------------------------------------

const MainLayout = Loadable(
  lazy(() => import("./MainLayout")),
  SplashScreen,
);

export function DynamicLayout() {
  return <MainLayout />;
}
