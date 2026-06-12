// Import Dependencies
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

const notifications = [
  { id: 1, title: "New comment on your post", time: "2 min ago" },
  { id: 2, title: "Your report is ready", time: "1 hour ago" },
  { id: 3, title: "New user registered", time: "3 hours ago" },
];

export function Notifications() {
  return (
    <Menu as="div" className="relative">
      <MenuButton
        as={Button}
        variant="flat"
        isIcon
        className="relative size-9 rounded-full"
      >
        <BellIcon className="size-5 text-gray-600" />
        <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-error" />
      </MenuButton>
      <Transition
        as={Fragment}
        enter="transition ease-out"
        enterFrom="opacity-0 translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-2"
      >
        <MenuItems className="absolute right-0 z-50 mt-1.5 w-72 rounded-lg border border-gray-150 bg-white shadow-soft outline-none">
          <div className="flex items-center justify-between border-b border-gray-150 px-4 py-3">
            <h3 className="text-sm font-semibold text-gray-800">
              Notifications
            </h3>
            <span className="rounded-full bg-primary-600/10 px-2 py-0.5 text-xs font-medium text-primary-600">
              {notifications.length} New
            </span>
          </div>
          <div className="py-1">
            {notifications.map((n) => (
              <MenuItem key={n.id}>
                {({ focus }) => (
                  <button
                    className={`flex w-full flex-col px-4 py-2.5 text-left transition-colors ${focus ? "bg-gray-100" : ""}`}
                  >
                    <span className="text-xs-plus text-gray-700">{n.title}</span>
                    <span className="mt-0.5 text-xs text-gray-400">{n.time}</span>
                  </button>
                )}
              </MenuItem>
            ))}
          </div>
          <div className="border-t border-gray-150 px-4 py-2">
            <button className="text-xs font-medium text-primary-600 hover:text-primary-600/70">
              View all notifications
            </button>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
