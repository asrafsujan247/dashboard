import { create } from "zustand";
import { isServer } from "@/utils/isServer";
import { useBreakpointsStore } from "./breakpointStore";

interface SidebarState {
  isExpanded: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: useBreakpointsStore.getState().xlAndUp,
  toggle: () => set((state) => ({ isExpanded: !state.isExpanded })),
  open: () => set({ isExpanded: true }),
  close: () => set({ isExpanded: false }),
}));

// Auto-close sidebar when breakpoint changes to lgAndDown
useBreakpointsStore.subscribe((state, prevState) => {
  if (state.name !== prevState.name && state.lgAndDown) {
    useSidebarStore.getState().close();
  }
});

// Sync body class with sidebar expanded state
if (!isServer) {
  const updateBodyClass = (isExpanded: boolean) => {
    if (isExpanded) {
      document.body.classList.add("is-sidebar-open");
    } else {
      document.body.classList.remove("is-sidebar-open");
    }
  };

  updateBodyClass(useSidebarStore.getState().isExpanded);

  useSidebarStore.subscribe((state, prevState) => {
    if (state.isExpanded !== prevState.isExpanded) {
      updateBodyClass(state.isExpanded);
    }
  });
}
