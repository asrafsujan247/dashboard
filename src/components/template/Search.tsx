// Import Dependencies
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactNode, useState } from "react";

// ----------------------------------------------------------------------

interface SearchProps {
  renderButton?: (open: () => void) => ReactNode;
}

export function Search({ renderButton }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setQuery("");
  };

  return (
    <>
      {renderButton?.(open)}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={close}>
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
            <div className="flex min-h-full items-start justify-center p-4 pt-[10vh]">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95 translate-y-[-10px]"
                enterTo="opacity-100 scale-100 translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <div className="flex items-center gap-3 border-b border-gray-150 px-4 py-3">
                    <MagnifyingGlassIcon className="size-5 shrink-0 text-gray-400" />
                    <input
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />
                    <button
                      onClick={close}
                      className="shrink-0 rounded p-1 text-gray-400 hover:text-gray-600"
                    >
                      <XMarkIcon className="size-4" />
                    </button>
                  </div>
                  {query && (
                    <div className="p-4 text-sm text-gray-500">
                      No results for &ldquo;{query}&rdquo;
                    </div>
                  )}
                  {!query && (
                    <div className="p-4 text-sm text-gray-400">
                      Start typing to search...
                    </div>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
