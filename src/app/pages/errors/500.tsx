// Local Imports
import RepairServer from "@/assets/illustrations/repair-server.svg?react";
import { Page } from "@/components/shared/Page";

// ----------------------------------------------------------------------

export default function Error500() {
  return (
    <Page title="Error 500">
      <main className="min-h-100vh relative grid w-full grow grid-cols-1 place-items-center p-4">
        <div className="w-full max-w-[26rem] text-center">
          <RepairServer
            className="w-full"
            style={{
              "--primary": "#F59E47",
              "--illus-400": "oklch(55.4% 0.046 257.417)",
              "--illus-600": "oklch(37.2% 0.044 257.287)",
            } as React.CSSProperties}
          />
          <p className="pt-8 text-7xl font-bold text-primary-600">
            500
          </p>
          <p className="pt-4 text-xl font-semibold text-gray-800">
            Internal Server Error
          </p>
          <p className="text-balance pt-2 text-gray-500">
            The server has been deserted for a while. Please be patient or try
            again later
          </p>
        </div>
      </main>
    </Page>
  );
}
