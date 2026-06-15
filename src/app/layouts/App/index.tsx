// Import Dependencies
import { lazy } from "react";
import clsx from "clsx";
import { Outlet, ScrollRestoration } from "react-router";

// Local Imports
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Progress } from "@/components/template/Progress";
import { Loadable } from "@/components/shared/Loadable";

const Toaster = Loadable(lazy(() => import("@/components/template/Toaster")));
const Tooltip = Loadable(lazy(() => import("@/components/template/Tooltip")));

// ----------------------------------------------------------------------

export default function App() {
  return (
    <>
      <Progress />
      <ScrollRestoration />
      <Header />
      <main className={clsx("main-content transition-content grid grid-cols-1")}>
        <Outlet />
      </main>
      <Sidebar />
      <Tooltip />
      <Toaster />
    </>
  );
}
