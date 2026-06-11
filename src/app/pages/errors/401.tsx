// Local Imports
import Authorize from "@/assets/illustrations/authorize.svg?react";
import { Page } from "@/components/shared/Page";

// ----------------------------------------------------------------------

export default function Error401() {
  return (
    <Page title="Error 401">
      <main className="min-h-100vh relative grid w-full grow grid-cols-1 place-items-center p-4">
        <div className="w-full max-w-[26rem] text-center">
          <Authorize
            className="w-full"
            style={{
              ["--primary" as string]: "#F59E47",
              ["--dark-500" as string]: "oklch(37.2% 0.044 257.287)",
            }}
          />
          <p className="pt-4 text-7xl font-bold text-primary-600">
            401
          </p>
          <p className="pt-4 text-xl font-semibold text-gray-800">
            You are not authorized
          </p>
          <p className="text-balance pt-2 text-gray-500">
            You are missing the required rights to be able to access this page
          </p>
        </div>
      </main>
    </Page>
  );
}
