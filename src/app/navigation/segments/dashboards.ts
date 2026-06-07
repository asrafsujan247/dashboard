import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_DASHBOARDS = "/dashboards";

const path = (root: string, item: string) => `${root}${item}`;

export const dashboards: NavigationTree = {
  ...baseNavigationObj["dashboards"],
  type: "root",
  childs: [
    {
      id: "dashboards.sales",
      path: path(ROOT_DASHBOARDS, "/sales"),
      type: "item",
      title: "Sales",
      transKey: "nav.dashboards.sales",
      icon: "dashboards.sales",
    },
    {
      id: "dashboards.crm-analytics",
      path: path(ROOT_DASHBOARDS, "/crm-analytics"),
      type: "item",
      title: "CRM Analytics",
      transKey: "nav.dashboards.crm-analytics",
      icon: "dashboards.crm-analytics",
    },
    {
      id: "dashboards.orders",
      path: path(ROOT_DASHBOARDS, "/orders"),
      type: "item",
      title: "Orders",
      transKey: "nav.dashboards.orders",
      icon: "dashboards.orders",
    },
    {
      id: "dashboards.crypto-1",
      path: path(ROOT_DASHBOARDS, "/crypto/crypto-1"),
      type: "item",
      title: "Cryptocurrency v1",
      transKey: "nav.dashboards.crypto-1",
      icon: "dashboards.crypto",
    },
  ],
};
