import { baseNavigationObj } from "../baseNavigation";
import { NavigationTree } from "@/@types/navigation";

const ROOT_FORMS = "/forms";

const path = (root: string, item: string) => `${root}${item}`;

export const forms: NavigationTree = {
  ...baseNavigationObj["forms"],
  type: "root",
  childs: [
    {
      id: "forms.ekyc-form",
      type: "item",
      path: path(ROOT_FORMS, "/ekyc-form"),
      title: "eKYC Form",
      transKey: "nav.forms.ekyc-form",
      icon: "forms.ekyc-form",
    },
    {
      id: "forms.add-product-form",
      type: "item",
      path: path(ROOT_FORMS, "/add-product-form"),
      title: "Add Product Form",
      transKey: "nav.forms.add-product-form",
      icon: "forms.add-product-form",
    },
    {
      id: "forms.new-post-form",
      type: "item",
      path: path(ROOT_FORMS, "/new-post-form"),
      title: "New Post Form",
      transKey: "nav.forms.new-post-form",
      icon: "forms.new-post-form",
    },
  ],
};
