import { Navigate, RouteObject } from "react-router";

import AuthGuard from "@/middleware/AuthGuard";
import { DynamicLayout } from "../layouts/DynamicLayout";
import { AppLayout } from "../layouts/AppLayout";

/**
 * Protected routes configuration
 * These routes require authentication to access
 * Uses AuthGuard middleware to verify user authentication
 */
const protectedRoutes: RouteObject = {
  id: "protected",
  Component: AuthGuard,
  children: [
    // The dynamic layout supports both the main layout and the sideblock.
    {
      Component: DynamicLayout,
      children: [
        {
          index: true,
          element: <Navigate to="/dashboards/sales" replace />,
        },
        {
          path: "/components",
          children: [
            {
              index: true,
              element: <Navigate to="/components/basic-ui/avatar" replace />,
            },
            {
              path: "basic-ui/avatar",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/avatar"))
                  .default,
              }),
            },
            {
              path: "basic-ui/button",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/button"))
                  .default,
              }),
            },
            {
              path: "basic-ui/badge",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/badge"))
                  .default,
              }),
            },
            {
              path: "basic-ui/tag",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tag")).default,
              }),
            },
            {
              path: "basic-ui/divider",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/divider"))
                  .default,
              }),
            },
            {
              path: "basic-ui/typography",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/Typography"))
                  .default,
              }),
            },
            {
              path: "data-display/box",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/Box")).default,
              }),
            },
            {
              path: "data-display/popover",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/popover"))
                  .default,
              }),
            },
            {
              path: "data-display/timeline",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/timeline"))
                  .default,
              }),
            },
            {
              path: "data-display/collapse",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/collapse"))
                  .default,
              }),
            },
            {
              path: "data-display/legend",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/legend"))
                  .default,
              }),
            },
            {
              path: "data-display/mask",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/mask"))
                  .default,
              }),
            },
            {
              path: "data-display/contextual-help",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/components/contextual-help")
                ).default,
              }),
            },
            {
              path: "navigation/accordion",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/accordion"))
                  .default,
              }),
            },
            {
              path: "navigation/tab",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tab")).default,
              }),
            },
            {
              path: "navigation/dropdown",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/dropdown"))
                  .default,
              }),
            },
            {
              path: "navigation/steps",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/steps"))
                  .default,
              }),
            },
            {
              path: "navigation/pagination",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/pagination"))
                  .default,
              }),
            },
            {
              path: "navigation/menu-list",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/menu-list"))
                  .default,
              }),
            },
            {
              path: "navigation/treeview",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/treeview"))
                  .default,
              }),
            },
            {
              path: "loading/progress",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/progress"))
                  .default,
              }),
            },
            {
              path: "loading/circlebar",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/circlebar"))
                  .default,
              }),
            },
            {
              path: "loading/skeleton",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/skeleton"))
                  .default,
              }),
            },
            {
              path: "loading/spinner",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/spinner"))
                  .default,
              }),
            },
            {
              path: "feedback/tooltip",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/tooltip"))
                  .default,
              }),
            },
            {
              path: "feedback/notification",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/notification"))
                  .default,
              }),
            },
            {
              path: "feedback/alert",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/alert"))
                  .default,
              }),
            },
            {
              path: "modal/modal",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/modal"))
                  .default,
              }),
            },
            {
              path: "modal/drawer",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/drawer"))
                  .default,
              }),
            },
            {
              path: "advanced/scroll-shadow",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/components/scroll-shadow")
                ).default,
              }),
            },
            {
              path: "advanced/charts",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/charts"))
                  .default,
              }),
            },
            {
              path: "advanced/carousel",
              lazy: async () => ({
                Component: (await import("@/app/pages/components/carousel"))
                  .default,
              }),
            },
          ],
        },
        {
          path: "/forms",
          children: [
            {
              index: true,
              element: <Navigate to="/forms/ekyc-form" replace />,
            },
            {
              path: "ekyc-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/KYCForm")).default,
              }),
            },
            {
              path: "add-product-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/add-product-form"))
                  .default,
              }),
            },
            {
              path: "new-post-form",
              lazy: async () => ({
                Component: (await import("@/app/pages/forms/new-post-form"))
                  .default,
              }),
            },
          ],
        },
        {
          path: "/tables",
          children: [
            {
              index: true,
              element: <Navigate to="/tables/orders-datatable-1" replace />,
            },
            {
              path: "orders-datatable-1",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/orders-datatable-1")
                ).default,
              }),
            },
            {
              path: "orders-datatable-2",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/orders-datatable-2")
                ).default,
              }),
            },
            {
              path: "courses-datatable",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/courses-datatable")
                ).default,
              }),
            },
            {
              path: "users-datatable",
              lazy: async () => ({
                Component: (await import("@/app/pages/tables/users-datatable"))
                  .default,
              }),
            },
            {
              path: "projects-datatable",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/tables/projects-datatable")
                ).default,
              }),
            },
          ],
        },
        {
          path: "/prototypes",
          children: [
            {
              index: true,
              element: <Navigate to="/prototypes/users-card/users-card-7" replace />,
            },
            {
              path: "users-card",
              children: [
                {
                  path: "users-card-7",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/prototypes/users-card-7")
                    ).default,
                  }),
                },
              ],
            },
            {
              path: "blog-card",
              children: [
                {
                  path: "blog-card-1",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/prototypes/blog-card-1")
                    ).default,
                  }),
                },
                {
                  path: "blog-card-6",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/prototypes/blog-card-6")
                    ).default,
                  }),
                },
              ],
            },
            {
              path: "post-details",
              lazy: async () => ({
                Component: (await import("@/app/pages/prototypes/post-details"))
                  .default,
              }),
            },
            {
              path: "price-list",
              children: [
                {
                  path: "price-list-4",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/prototypes/price-list-4")
                    ).default,
                  }),
                },
              ],
            },
            {
              path: "help",
              children: [
                {
                  path: "help-2",
                  lazy: async () => ({
                    Component: (await import("@/app/pages/prototypes/help-2"))
                      .default,
                  }),
                },
              ],
            },
            {
              path: "invoice",
              children: [
                {
                  path: "invoice-1",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/prototypes/invoice-1")
                    ).default,
                  }),
                },
              ],
            },
          ],
        },
        {
          path: "dashboards",
          children: [
            {
              index: true,
              element: <Navigate to="/dashboards/sales" replace />,
            },
            {
              path: "sales",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/sales"))
                  .default,
              }),
            },
            {
              path: "crm-analytics",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/dashboards/crm-analytics")
                ).default,
              }),
            },
            {
              path: "orders",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/orders"))
                  .default,
              }),
            },
            {
              path: "crypto/crypto-1",
              lazy: async () => ({
                Component: (await import("@/app/pages/dashboards/crypto-1"))
                  .default,
              }),
            },
          ],
        },
        {
          path: "apps",
        },
        {
          path: "Docs",
          children: [
            {
              index: true,
              element: <Navigate to="/docs/getting-started" replace />,
            },
            {
              path: "getting-started",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/getting-started"))
                  .default,
              }),
            },
            {
              path: "shared-components/*",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/shared-components"))
                  .default,
              }),
            },
            {
              path: "hooks/*",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/hooks")).default,
              }),
            },
            {
              path: "utils/*",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/utils")).default,
              }),
            },
            {
              path: "attributions",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/attributions"))
                  .default,
              }),
            },
            {
              path: "changelogs",
              lazy: async () => ({
                Component: (await import("@/app/pages/docs/changelogs"))
                  .default,
              }),
            },
          ],
        },
      ],
    },
    // The app layout supports only the main layout. Avoid using it for other layouts.
    {
      Component: AppLayout,
      children: [
        {
          path: "apps",
          children: [
            {
              path: "pos",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/pos")).default,
              }),
            },
            {
              path: "mail",
              lazy: async () => ({
                Component: (await import("@/app/pages/apps/mail/Layout"))
                  .default,
              }),
              children: [
                {
                  index: true,
                  lazy: async () => ({
                    Component: (await import("@/app/pages/apps/mail/index"))
                      .default,
                  }),
                },
                {
                  path: ":mail-id",
                  lazy: async () => ({
                    Component: (
                      await import("@/app/pages/apps/mail/MailContent")
                    ).default,
                  }),
                },
              ],
            },
          ],
        },
        {
          path: "settings",
          lazy: async () => ({
            Component: (await import("@/app/pages/settings/Layout")).default,
          }),
          children: [
            {
              index: true,
              element: <Navigate to="/settings/general" replace />,
            },
            {
              path: "general",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/General")
                ).default,
              }),
            },
            {
              path: "appearance",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Appearance")
                ).default,
              }),
            },
            {
              path: "notifications",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Notifications")
                ).default,
              }),
            },
            {
              path: "applications",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Applications")
                ).default,
              }),
            },
            {
              path: "sessions",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Sessions")
                ).default,
              }),
            },
            {
              path: "billing",
              lazy: async () => ({
                Component: (
                  await import("@/app/pages/settings/sections/Billing")
                ).default,
              }),
            },
          ],
        },
      ],
    },
  ],
};

export { protectedRoutes };
