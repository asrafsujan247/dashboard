// Local Imports
import WindowCrash from "@/assets/illustrations/window-crash.svg?react";
import { Page } from "@/components/shared/Page";

// ----------------------------------------------------------------------

export default function Error429() {
  return (
    <Page title="Error 429">
      <main className="min-h-100vh relative grid w-full grow grid-cols-1 place-items-center p-4">
        <div className="w-full max-w-[26rem] text-center">
          <WindowCrash
            className="w-full"
            style={{
              ["--primary" as string]: "#F59E47",
              ["--dark-700" as string]: "oklch(96.8% 0.007 247.896)",
              ["--dark-800" as string]: "oklch(86.9% 0.022 252.894)",
            }}
          />
          <p className="pt-6 text-7xl font-bold text-primary-600">
            429
          </p>
          <p className="pt-4 text-xl font-semibold text-gray-800">
            Too many requests
          </p>
          <p className="text-balance pt-2 text-gray-500">
            The user has send too many requests in a given amount of time.
            Intended for use with rate limiting schemas
          </p>
        </div>
      </main>
    </Page>
  );
}
