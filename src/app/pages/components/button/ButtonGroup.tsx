// Local Imports
import { Button } from "@/components/ui";
import { createScopedKeydownHandler } from "@/utils/dom/createScopedKeydownHandler";
// ----------------------------------------------------------------------

const ButtonGroup = () => {
  const onKeyDown = createScopedKeydownHandler({
    siblingSelector: ".btn-base",
    parentSelector: "[data-button-group]",
    activateOnFocus: false,
    loop: true,
    orientation: "horizontal",
    dir: "ltr",
  });

  return (
    <div
      className="flex flex-wrap -space-x-px rtl:space-x-reverse"
      data-button-group
    >
      <Button
        variant="outlined"
        className="ltr:rounded-r-none rtl:rounded-l-none"
        onKeyDown={onKeyDown}
      >
        Import
      </Button>
      <Button
        variant="outlined"
        className="rounded-none px-5 py-2"
        onKeyDown={onKeyDown}
      >
        Export
      </Button>
      <Button
        variant="outlined"
        className="ltr:rounded-l-none rtl:rounded-r-none"
        onKeyDown={onKeyDown}
      >
        Print
      </Button>
    </div>
  );
};

export { ButtonGroup };
