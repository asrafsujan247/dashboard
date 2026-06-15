// Local Imports
import { Button, Card, Input } from "@/components/ui";
import { Page } from "@/components/shared/Page";

// ----------------------------------------------------------------------

export default function Password() {
  return (
    <Page title="Settings">
      <div className="transition-content grid flex-1 grid-cols-1 place-content-start px-(--margin-x) py-6">
        <Card className="h-full w-full p-4 sm:px-5 2xl:mx-auto 2xl:max-w-5xl">
    <div className="w-full max-w-3xl 2xl:max-w-5xl">
      <h5 className=" text-lg font-medium text-gray-800">
        Password
      </h5>
      <p className="mt-0.5 text-sm text-balance">
        Update your password here. Enter your current and new password.
      </p>
      <div className=" my-5 h-px bg-gray-200" />

      <div>
        <p className=" text-base font-medium text-gray-800">
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
        </Card>
      </div>
    </Page>
  );
}
