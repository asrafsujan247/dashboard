import { create } from "zustand";
import { breakpoints } from "@/configs/breakpoints";
import { isServer } from "@/utils/isServer";

export interface BreakpointsState {
  name: string;
  isXs: boolean;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
  smAndDown: boolean;
  smAndUp: boolean;
  mdAndDown: boolean;
  mdAndUp: boolean;
  lgAndDown: boolean;
  lgAndUp: boolean;
  xlAndDown: boolean;
  xlAndUp: boolean;
  SM: number;
  MD: number;
  LG: number;
  XL: number;
  "2XL": number;
}

function getBreakpoint(): BreakpointsState {
  if (isServer) {
    return {
      name: "",
      isXs: false,
      isSm: false,
      isMd: false,
      isLg: false,
      isXl: false,
      is2xl: false,
      smAndDown: false,
      smAndUp: false,
      mdAndDown: false,
      mdAndUp: false,
      lgAndDown: false,
      lgAndUp: false,
      xlAndDown: false,
      xlAndUp: false,
      ...breakpoints,
    };
  }

  const width = window.innerWidth;

  const xs = width < breakpoints.SM;
  const sm = width < breakpoints.MD && !xs;
  const md = width < breakpoints.LG && !(sm || xs);
  const lg = width < breakpoints.XL && !(md || sm || xs);
  const xl = width < breakpoints["2XL"] && !(lg || md || sm || xs);
  const the2xl = width >= breakpoints["2XL"];

  let name = "";
  if (xs) name = "xs";
  if (sm) name = "sm";
  if (md) name = "md";
  if (lg) name = "lg";
  if (xl) name = "xl";
  if (the2xl) name = "2xl";

  return {
    name,
    isXs: xs,
    isSm: sm,
    isMd: md,
    isLg: lg,
    isXl: xl,
    is2xl: the2xl,
    smAndDown: xs || sm,
    smAndUp: sm || md || lg || xl || the2xl,
    mdAndDown: xs || sm || md,
    mdAndUp: md || lg || xl || the2xl,
    lgAndDown: xs || sm || md || lg,
    lgAndUp: lg || xl || the2xl,
    xlAndDown: xs || sm || md || lg || xl,
    xlAndUp: xl || the2xl,
    ...breakpoints,
  };
}

export const useBreakpointsStore = create<BreakpointsState>(() => getBreakpoint());

if (!isServer) {
  const observer = new ResizeObserver(() => {
    const current = getBreakpoint();
    if (current.name !== useBreakpointsStore.getState().name) {
      useBreakpointsStore.setState(current);
    }
  });
  observer.observe(document.documentElement);
}
