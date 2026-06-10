// Import Dependencies
import {
  CheckBadgeIcon,
  ClockIcon,
  CubeIcon,
  CurrencyDollarIcon,
  TruckIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

// Local Imports
import { Card } from "@/components/ui";

// ----------------------------------------------------------------------

export function Statistics() {
  return (
    <div className="col-span-12 lg:col-span-4">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-2">
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              $67.6k
            </p>
            <CurrencyDollarIcon className="size-5 text-this-primary" />
          </div>
          <p className="mt-1 text-xs-plus">Income</p>
        </Card>
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              7.6k
            </p>
            <CheckBadgeIcon className="size-5 text-this-success" />
          </div>
          <p className="mt-1 text-xs-plus">Completed</p>
        </Card>
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              143
            </p>
            <ClockIcon className="size-5 text-this-warning" />
          </div>
          <p className="mt-1 text-xs-plus">Pending</p>
        </Card>
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              618
            </p>
            <TruckIcon className="size-5 text-this-info" />
          </div>
          <p className="mt-1 text-xs-plus">Dispatch</p>
        </Card>
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              46k
            </p>
            <CubeIcon className="size-5 text-this-secondary" />
          </div>
          <p className="mt-1 text-xs-plus">Products</p>
        </Card>
        <Card className="p-3 lg:p-4">
          <div className="flex justify-between gap-1">
            <p className="text-xl font-semibold text-gray-800">
              8.8k
            </p>
            <UsersIcon className="size-5 text-this-error" />
          </div>
          <p className="mt-1 text-xs-plus">Customers</p>
        </Card>
      </div>
    </div>
  );
}

