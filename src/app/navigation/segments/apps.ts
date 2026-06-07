import { NavigationTree } from "@/@types/navigation";
import { baseNavigationObj } from "../baseNavigation";

const ROOT_APPS = "/apps";

const path = (root: string, item: string) => `${root}${item}`;

export const apps: NavigationTree = {
  ...baseNavigationObj["apps"],
  type: "root",
  childs: [
    {
      id: "apps.mail",
      path: path(ROOT_APPS, "/mail"),
      type: "item",
      title: "Mail App",
      transKey: "nav.apps.mail",
      icon: "apps.mail",
    },
    {
      id: "apps.pos",
      path: path(ROOT_APPS, "/pos"),
      type: "item",
      title: "POS Sytem",
      transKey: "nav.apps.pos",
      icon: "apps.pos",
    },
  ],
};
