// Import Dependencies
import { Outlet, ScrollRestoration } from "react-router";
import { lazy } from "react";

// Local Imports
import { Loadable } from "@/components/shared/Loadable";
import { Progress } from "@/components/template/Progress";

const Toaster = Loadable(lazy(() => import("@/components/template/Toaster")));
const Tooltip = Loadable(lazy(() => import("@/components/template/Tooltip")));

// ----------------------------------------------------------------------

function Root() {
  return (
    <>
      <Progress />
      <ScrollRestoration />
      <Outlet />
      <Tooltip />
      <Toaster />
    </>
  );
}

export default Root;
