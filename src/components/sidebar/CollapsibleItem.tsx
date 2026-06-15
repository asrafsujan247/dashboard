// Import Dependencies
import clsx from "clsx";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

// Local Imports
import { AccordionButton, AccordionItem, AccordionPanel } from "@/components/ui";
import { NavigationTree } from "@/@types/navigation";
import { CollapsibleMenuItem } from "./CollapsibleMenuItem";

// ----------------------------------------------------------------------

export function CollapsibleItem({ data }: { data: NavigationTree }) {
  if (!data.childs) throw new Error("CollapsibleItem must have childs");
  const { childs } = data;

  return (
    <AccordionItem value={data.path ?? data.id}>
      {({ open }: { open: boolean }) => (
        <>
          <AccordionButton
            className={clsx(
              "text-xs-plus flex w-full min-w-0 cursor-pointer items-center justify-between gap-1 py-2 text-start tracking-wide outline-hidden transition-[color,padding-left,padding-right] duration-300 ease-in-out",
              open ? "font-semibold text-gray-800" : "text-gray-600 hover:text-gray-800 focus:text-gray-800",
            )}
          >
            <span className="truncate">{data.title}</span>
            <ChevronRightIcon
              className={clsx("size-4 text-gray-400 transition-transform ease-in-out", open && "rotate-90")}
            />
          </AccordionButton>
          <AccordionPanel>
            {childs.map((i) => (
              <CollapsibleMenuItem key={i.path} data={i} />
            ))}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
