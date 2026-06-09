// Local Imports
import { Button, Input } from "@/components/ui";

// ----------------------------------------------------------------------

export default function Password() {
  return (
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h5 className="dark:text-dark-50 text-lg font-medium text-gray-800">
        Password
      </h5>
      <p className="mt-0.5 text-sm text-balance">
        Update your password here. Enter your current and new password.
      </p>
      <div className="dark:bg-dark-500 my-5 h-px bg-gray-200" />

      <div>
        <p className="dark:text-dark-100 text-base font-medium text-gray-800">
          Password Reset
        </p>
        <p className="mt-0.5 text-sm text-balance">
          Update your password here. Enter your current and new password.
        </p>
        <div className="mt-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">Current Password:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">New Password:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <p className="my-auto font-medium">Confirm Password:</p>
            <Input
              type="password"
              classNames={{ root: "mt-1.5 flex-1 md:col-span-2 md:mt-0" }}
              placeholder="********"
            />
          </div>
        </div>
        <div className="mt-4 text-end">
          <Button>Update password</Button>
        </div>
      </div>
    </div>
  );
}
