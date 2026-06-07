import { NavigationTree } from "@/@types/navigation";

const ROOT_PROTOTYPES = "/prototypes";

const path = (root: string, item: string) => `${root}${item}`;

export const prototypes: NavigationTree = {
  id: "prototypes",
  type: "root",
  path: "prototypes",
  title: "Prototypes",
  transKey: "nav.prototypes.prototypes",
  icon: "prototypes",
  childs: [
    {
      id: "prototypes.users-card-7",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/users-card/users-card-7"),
      title: "Users List 7",
      transKey: "nav.prototypes.users-card-7",
    },
    {
      id: "prototypes.blog-card-1",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/blog-card/blog-card-1"),
      title: "Blog List 1",
      transKey: "nav.prototypes.blog-card-1",
    },
    {
      id: "prototypes.blog-card-6",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/blog-card/blog-card-6"),
      title: "Blog List 6",
      transKey: "nav.prototypes.blog-card-6",
    },
    {
      id: "prototypes.post-details",
      path: path(ROOT_PROTOTYPES, "/post-details"),
      type: "item",
      title: "Post Details",
      transKey: "nav.prototypes.post-details",
      icon: "prototypes.post-details",
    },
    {
      id: "prototypes.price-list-4",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/price-list/price-list-4"),
      title: "Price List 4",
      transKey: "nav.prototypes.price-list-4",
    },
    {
      id: "prototypes.help-2",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/help/help-2"),
      title: "Help 2",
      transKey: "nav.prototypes.help-2",
    },
    {
      id: "prototypes.invoice-1",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/invoice/invoice-1"),
      title: "Invoice 1",
      transKey: "nav.prototypes.invoice-1",
    },
    {
      id: "prototypes.divide-1",
      type: "divider",
    },
    {
      id: "prototypes.sign-in-2",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/sign-in/sign-in-2"),
      title: "Sign In 2",
      transKey: "nav.prototypes.sign-in-2",
    },
    {
      id: "prototypes.sign-up-2",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/sign-up/sign-up-2"),
      title: "Sign Up 2",
      transKey: "nav.prototypes.sign-up-2",
    },
    {
      id: "prototypes.divide-2",
      type: "divider",
    },
    {
      id: "prototypes.error-404-2",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/errors/404-v2"),
      title: "Error 404 v2",
      transKey: "nav.prototypes.error-404-2",
    },
    {
      id: "prototypes.error-401",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/errors/401"),
      title: "Error 401",
      transKey: "nav.prototypes.error-401",
    },
    {
      id: "prototypes.error-429",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/errors/429"),
      title: "Error 429",
      transKey: "nav.prototypes.error-429",
    },
    {
      id: "prototypes.error-500",
      type: "item",
      path: path(ROOT_PROTOTYPES, "/errors/500"),
      title: "Error 500",
      transKey: "nav.prototypes.error-500",
    },
  ],
};
