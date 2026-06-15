// Import Dependencies
import { Table } from "@tanstack/react-table";

// Local Imports
import {
  Pagination,
  PaginationItems,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui";
import { useMediaQuery } from "@/hooks";
import { Product } from "./fakeData";

// ----------------------------------------------------------------------

export function PaginationSection({ table }: { table: Table<Product> }) {
  const paginationState = table.getState().pagination;
  const is2xl = useMediaQuery("(min-width: 1536px)");
  const isXlAndUp = useMediaQuery("(min-width: 1280px)");

  return (
    <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
      <div>
        <Pagination
          total={table.getPageCount()}
          value={paginationState.pageIndex + 1}
          onChange={(page) => table.setPageIndex(page - 1)}
          siblings={is2xl ? 3 : isXlAndUp ? 2 : 1}
          boundaries={isXlAndUp ? 2 : 1}
        >
          <PaginationPrevious />
          <PaginationItems />
          <PaginationNext />
        </Pagination>
      </div>
      <div className="text-xs-plus truncate">
        {paginationState.pageIndex * paginationState.pageSize + 1} -{" "}
        {table.getRowModel().rows.length} of{" "}
        {table.getCoreRowModel().rows.length} entries
      </div>
    </div>
  );
}
