// Import Dependencies
import { Link } from "react-router";

// Local Imports
import Error404Magnify from "@/assets/illustrations/error-404-magnify.svg?react";
import { Page } from "@/components/shared/Page";
import { Button } from "@/components/ui";
import { useHover } from "@/hooks";

// ----------------------------------------------------------------------

export default function Error404() {
  const [btnRef, btnHovered] = useHover();

  return (
    <Page title="Error 404">
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-2xl p-6 text-center">
          <Error404Magnify
            className="w-full"
            style={{
              ["--primary" as string]: "oklch(66.6% 0.179 58.318)",
              ["--primary-light" as string]: "oklch(87.9% 0.169 91.605)",
            } as React.CSSProperties}
          />
          <p className="pt-4 text-xl font-semibold text-gray-800">
            Oops. This Page Not Found.
          </p>
          <p className="pt-2 text-gray-500">
            This page you are looking not available. Please back to home
          </p>
          <div className="mt-8">
            <Button
              component={Link}
              to="/"
              ref={btnRef}
              isGlow={btnHovered}
              color="primary"
              className="h-11 text-base"
            >
              Back To Home
            </Button>
          </div>
        </div>
      </main>
    </Page>
  );
}
