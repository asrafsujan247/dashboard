// Import Dependencies
import {
  Combobox as HeadlessCombobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Fragment, ReactNode, useState } from "react";
import clsx from "clsx";

// ----------------------------------------------------------------------

interface ComboboxProps<T> {
  data: T[];
  displayField?: keyof T;
  searchFields?: (keyof T)[];
  value?: T | null;
  onChange?: (value: T | null) => void;
  placeholder?: string;
  label?: ReactNode;
  className?: string;
  error?: boolean | ReactNode;
  highlight?: boolean;
  [key: string]: any;
}

export function Combobox<T extends Record<string, any>>({
  data,
  displayField = "name" as keyof T,
  searchFields: _searchFields,
  value,
  onChange,
  placeholder = "Select...",
  label,
  className,
  error: _error,
  highlight: _highlight,
}: ComboboxProps<T>) {
  const [query, setQuery] = useState("");

  const filtered =
    query === ""
      ? data
      : data.filter((item) =>
          String(item[displayField])
            .toLowerCase()
            .includes(query.toLowerCase()),
        );

  const displayValue = (item: T | null) =>
    item ? String(item[displayField]) : "";

  return (
    <div className={clsx("input-root", className)}>
      {label && <label className="input-label mb-1.5 block">{label}</label>}
      <HeadlessCombobox value={value ?? null} onChange={onChange}>
        <div className="relative">
          <ComboboxButton className="relative w-full">
            <ComboboxInput
              className="form-input w-full border-gray-300 focus:border-primary-600 hover:border-gray-400"
              displayValue={displayValue}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="size-5 text-gray-400" />
            </div>
          </ComboboxButton>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white py-1 shadow-lg outline-none">
              {filtered.length === 0 && query !== "" ? (
                <div className="px-4 py-2 text-sm text-gray-500">
                  Nothing found
                </div>
              ) : (
                filtered.map((item, i) => (
                  <ComboboxOption
                    key={i}
                    value={item}
                    className={({ focus }) =>
                      clsx(
                        "cursor-pointer px-4 py-2 text-sm",
                        focus ? "bg-primary-600/10 text-primary-700" : "text-gray-700",
                      )
                    }
                  >
                    {String(item[displayField])}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </HeadlessCombobox>
    </div>
  );
}
