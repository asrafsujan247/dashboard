import { NavigationTree } from "@/@types/navigation";

export const settings: NavigationTree = {
  id: "settings",
  type: "item",
  path: "/settings",
  title: "Settings",
  transKey: "nav.settings.settings",
  icon: "settings",
  childs: [
    {
      id: "general",
      type: "item",
      path: "/settings/general",
      title: "General",
      transKey: "nav.settings.general",
      icon: "settings.general",
    },
    {
      id: "appearance",
      type: "item",
      path: "/settings/appearance",
      title: "Appearance",
      transKey: "nav.settings.appearance",
      icon: "settings.appearance",
    },
    {
      id: "billing",
      type: "item",
      path: "/settings/billing",
      title: "Billing",
      transKey: "nav.settings.billing",
      icon: "settings.billing",
    },
    {
      id: "password",
      type: "item",
      path: "/settings/password",
      title: "Password",
      transKey: "nav.settings.password",
      icon: "settings.password",
    },
  ],
};
