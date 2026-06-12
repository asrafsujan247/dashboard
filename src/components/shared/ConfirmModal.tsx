// Import Dependencies
import { ReactNode } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

// Local Imports
import { Button } from "@/components/ui";

// ----------------------------------------------------------------------

interface ConfirmMessageContent {
  title?: string;
  description?: ReactNode;
}

export interface ConfirmMessages {
  pending?: ConfirmMessageContent;
  success?: ConfirmMessageContent;
  error?: ConfirmMessageContent;
}

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  messages?: ConfirmMessages;
  onOk?: () => void;
  confirmLoading?: boolean;
  state?: "pending" | "success" | "error";
}

export function ConfirmModal({
  show,
  onClose,
  messages,
  onOk,
  confirmLoading,
  state = "pending",
}: ConfirmModalProps) {
  const current = messages?.[state];

  const defaultMessages: Record<string, ConfirmMessageContent> = {
    pending: { title: "Confirm Delete", description: "Are you sure you want to delete this item? This action cannot be undone." },
    success: { title: "Deleted", description: "The item has been successfully deleted." },
    error: { title: "Error", description: "An error occurred. Please try again." },
  };

  const title = current?.title ?? defaultMessages[state]?.title;
  const description = current?.description ?? defaultMessages[state]?.description;

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-[200]" onClose={onClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" />
        </TransitionChild>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  {state === "success" && (
                    <CheckCircleIcon className="mb-3 size-12 text-success" />
                  )}
                  {state === "error" && (
                    <XCircleIcon className="mb-3 size-12 text-error" />
                  )}
                  <DialogTitle className="text-lg font-semibold text-gray-800">
                    {title}
                  </DialogTitle>
                  {description && (
                    <p className="mt-2 text-sm text-gray-500">{description}</p>
                  )}
                </div>
                <div className="mt-6 flex justify-end gap-3">
                  {state === "pending" && (
                    <>
                      <Button variant="flat" onClick={onClose}>
                        Cancel
                      </Button>
                      <Button
                        color="error"
                        onClick={onOk}
                      >
                        {confirmLoading ? "Deleting..." : "Delete"}
                      </Button>
                    </>
                  )}
                  {(state === "success" || state === "error") && (
                    <Button onClick={onClose}>Close</Button>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
