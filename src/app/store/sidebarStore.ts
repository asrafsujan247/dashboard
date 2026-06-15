import { create } from "zustand";
import { isServer } from "@/utils/isServer";

interface SidebarState {
  isExpanded: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isExpanded: !isServer && window.matchMedia("(min-width: 1280px)").matches,
  toggle: () => set((state) => ({ isExpanded: !state.isExpanded })),
  open: () => set({ isExpanded: true }),
  close: () => set({ isExpanded: false }),
}));

if (!isServer) {
  // Auto open/close sidebar when crossing the xl breakpoint (1280px)
  const xlMq = window.matchMedia("(min-width: 1280px)");
  xlMq.addEventListener("change", (e) => {
    if (e.matches) {
      useSidebarStore.getState().open();
    } else {
      useSidebarStore.getState().close();
    }
  });

  // Sync body class with sidebar expanded state
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
