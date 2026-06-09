// Import Dependencies
import { SunIcon } from "@heroicons/react/24/outline";

// ----------------------------------------------------------------------

export function Footer() {
  return (
    <div className="flex px-4 py-3">
      <div className="dark:bg-dark-700 dark:text-dark-200 flex w-max min-w-full items-center justify-center rounded-lg bg-gray-200 px-1.5 py-1 text-gray-600">
        <div className="flex-1 shrink-0 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap dark:bg-dark-500 dark:text-dark-100 bg-white shadow-sm flex items-center justify-center">
          <SunIcon className="size-5" />
        </div>
      </div>
    </div>
  );
}
