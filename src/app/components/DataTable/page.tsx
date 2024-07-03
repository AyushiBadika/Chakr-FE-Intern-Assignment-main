"use client";

import * as React from "react";
import {
  CalendarIcon,
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
  Link1Icon,
  Link2Icon,
  LinkedInLogoIcon,
  LockOpen1Icon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { BsFillBuildingsFill, BsPeople } from "react-icons/bs";
import { PiUserCircleCheckDuotone } from "react-icons/pi";
import { MdApps } from "react-icons/md";
import { BiCurrentLocation, BiLocationPlus } from "react-icons/bi";

const data: Companies[] = [
  {
    id: "m5gr84i9",

    name: "Qonto",
    "Domain Name": "qonto.com",
    "Account Owner": "",
    "Creation Date": "07/03/2024 12:52",
    Employees: 800,
    Linkedin: "",
    Address: "San Francisco",
  },
  {
    id: "3u1reuv4",

    name: "Stripe",
    "Domain Name": "stripe.com",
    "Account Owner": "",
    "Creation Date": "07/02/2024 12:52",
    Employees: 8000,
    Linkedin: "",
    Address: "San Francisco",
  },
  {
    id: "derv1ws0",

    name: "Figma",
    "Domain Name": "figma.com",
    "Account Owner": "",
    "Creation Date": "07/02/2024 12:52",
    Employees: 800,
    Linkedin: "",
    Address: "San Francisco",
  },

  {
    id: "bhqecj4p",
    name: "Notion",
    "Domain Name": "notion.com",
    "Account Owner": "",
    "Creation Date": "07/02/2024 12:52",
    Linkedin: "",
    Employees: 400,
    Address: "San Francisco",
  },
];

export type Companies = {
  id: string;

  name: string;
  "Domain Name": string;
  "Account Owner": string;
  "Creation Date": string;
  Employees: number;
  Linkedin: string;
  Address: string;
};

export const columns: ColumnDef<Companies>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: () => (
      <div className="flex gap-2 items-center">
        <BsFillBuildingsFill /> Name
      </div>
    ),
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "Domain Name",
    header: () => (
      <div className="flex gap-2 items-center">
        <Link2Icon />
        Domain Name
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Domain Name")}</div>
    ),
  },
  {
    accessorKey: "Account Owner",
    header: () => (
      <div className="flex gap-2 items-center">
        <PiUserCircleCheckDuotone />
        Account Owner
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Account Owner")}</div>
    ),
  },
  {
    accessorKey: "Creation Date",
    header: () => (
      <div className="flex gap-2 items-center">
        <CalendarIcon />
        Creation Date
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Creation Date")}</div>
    ),
  },
  {
    accessorKey: "Employees",
    header: () => (
      <div className="flex gap-2 items-center">
        <BsPeople />
        Employees
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Employees")}</div>
    ),
  },
  {
    accessorKey: "Linkedin",
    header: () => (
      <div className="flex gap-2 items-center">
        <LinkedInLogoIcon />
        Linkedin
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Linkedin")}</div>
    ),
  },
  {
    accessorKey: "Address",
    header: () => (
      <div className="flex gap-2 items-center">
        <BiCurrentLocation />
        Address
      </div>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Address")}</div>
    ),
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className=" h-[92%] mr-10 bg-white p-4 rounded-md">
      <div className="rounded-md borderw-[90%] h-[95%]">
        <Table className="h-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div> */}
    </div>
  );
}
