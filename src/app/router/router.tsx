// Import Dependencies
import { createBrowserRouter, Navigate, RouteObject } from "react-router";

// Local Imports
import App from "@/app/layouts/App";
import RootErrorBoundary from "@/app/pages/errors/RootErrorBoundary";
import { SplashScreen } from "@/components/template/SplashScreen";

// ----------------------------------------------------------------------

const router = createBrowserRouter([
  {
    id: "root",
    hydrateFallbackElement: <SplashScreen />,
    ErrorBoundary: RootErrorBoundary,
    children: [
      {
        Component: App,
        children: [
          {
            index: true,
            element: <Navigate to="/dashboards/sales" replace />,
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
              {
                path: "errors",
                children: [
                  {
                    path: "404-v2",
                    lazy: async () => ({
                      Component: (
                        await import("@/app/pages/prototypes/errors/404/v2")
                      ).default,
                    }),
                  },
                  {
                    path: "401",
                    lazy: async () => ({
                      Component: (await import("@/app/pages/prototypes/errors/401"))
                        .default,
                    }),
                  },
                  {
                    path: "429",
                    lazy: async () => ({
                      Component: (await import("@/app/pages/prototypes/errors/429"))
                        .default,
                    }),
                  },
                  {
                    path: "500",
                    lazy: async () => ({
                      Component: (await import("@/app/pages/prototypes/errors/500"))
                        .default,
                    }),
                  },
                ],
              },
              {
                path: "sign-in",
                children: [
                  {
                    path: "sign-in-2",
                    lazy: async () => ({
                      Component: (await import("@/app/pages/prototypes/sign-in-2"))
                        .default,
                    }),
                  },
                ],
              },
              {
                path: "sign-up",
                children: [
                  {
                    path: "sign-up-2",
                    lazy: async () => ({
                      Component: (await import("@/app/pages/prototypes/sign-up-2"))
                        .default,
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
            children: [
              {
                path: "pos",
                lazy: async () => ({
                  Component: (await import("@/app/pages/apps/pos")).default,
                }),
              },
              {
                path: "mail",
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
                path: "password",
                lazy: async () => ({
                  Component: (
                    await import("@/app/pages/settings/sections/Password")
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
    ] as RouteObject[],
  },
]);

export default router;
