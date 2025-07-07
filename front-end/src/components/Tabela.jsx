import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import FilterPopover from "./FilterPopover";
import Filters from "./Filters";
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { iconComponents } from "./ImportIcons";
import Loader from "../components/Loader";

function Tabela({
  data,
  nomeTabela,
  columns,
  icone,
  pesquisa,
  filtros,
  filtar,
  booleanFiltros,
}) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 12 });
  const IconComponent = iconComponents[icone];

  const table = useReactTable({
    data,
    columns,
    onPaginationChange: setPagination,
    state: {
      columnFilters,
      pagination,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
  });

  return (
    <div>
      {booleanFiltros && (
        <div>
          <div className="flex flex-row justify-between w-full  h-[18%] ">
            <div className="flex flex-row 2xl:gap-x-8 xl:gap-x-4  w-[50%] ">
              <IconComponent className="2xl:w-34 2xl:h-36 xl:w-20 xl:h-20  text-azul" />
              <div className="flex flex-col justify-between 2xl:py-10 xl:py-3 items-start ">
                <div className=" 2xl:text-xl xl:text-base 2xl:font-extralight xl:font-normal">
                  Clientes, <span>{localStorage.NOME}</span>
                </div>
                <div className="2xl:text-4xl xl:text-2xl 2xl:font-bold xl:font-semibold">
                  {nomeTabela}
                </div>
              </div>
            </div>
            <div className="flex xl:justify-end flex-col w-[50%] 2xl:py-9 xl:py-1 align-bottom">
              <div className="flex flex-row justify-end 2xl:gap-x-8 xl:gap-x-4">
                <div className="flex items-center text-lg gap-x-1">
                  <FilterPopover
                    filtros={filtros}
                    filtar={filtar}
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                  />
                </div>
                <div>
                  <Filters
                    columnFilters={columnFilters}
                    setColumnFilters={setColumnFilters}
                    pesquisa={pesquisa}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {table.getHeaderGroups().map((headerGroup) => (
        <div
          className="flex w-fit border-b-2 border-preto-claro dark:border-branco-claro"
          style={{ width: table.getTotalSize() }}
          key={headerGroup.id}
        >
          {headerGroup.headers.map((header, i, row) => (
            <div
              style={{ width: header.getSize() }}
              className="2xl:gap-x-2 xl:gap-x-1 relative flex justify-center items-center text-preto dark:text-branco-claro 2xl:text-xl xl:text-base 2xl:font-bold xl:font-semibold 2xl:p-2 xl:p-1 bg-transparent max-w-full group  after:h-[50%] after:border-r-[2px] after:border-preto-claro after:dark:border-branco-claro after:absolute  after:content-[''] after:right-0 after:rounded-lg last:after:hidden"
              key={header.id}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {header.column.getCanSort() && (
                <ArrowsUpDownIcon
                  onClick={header.column.getToggleSortingHandler()}
                  className="2xl:size-5 xl:size-4 text-azul"
                />
              )}
              {
                {
                  asc: (
                    <ChevronDownIcon className="2xl:size-5 xl:size-4 text-azul" />
                  ),
                  desc: (
                    <ChevronUpIcon className="2xl:size-5 xl:size-4 text-azul" />
                  ),
                }[header.column.getIsSorted()]
              }
              {/* <div
                onMouseDown={header.getResizeHandler()}
                onTouchStart={header.getResizeHandler()}
                className={
                  "absolute opacity-0 right-[-1px] w-[4px] h-[50%] bg-azul cursor-col-resize group-hover:opacity-100 z-10 rounded-lg " +
                  (header.column.getIsResizing()
                    ? "opacity-100 bg-green-400"
                    : "") +
                  (i + 1 === row.length ? "hidden" : "")
                }
              ></div> */}
            </div>
          ))}
        </div>
      ))}
      {data.length > 0 ? (
        table.getRowModel().rows.map((row) => (
          <div className="flex w-fit" key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <div
                style={{ width: cell.column.getSize() }}
                className="relative flex justify-center items-center text-preto dark:text-branco-claro 2xl:text-lg xl:text-sm 2xl:p-2 xl:p-1 bg-transparent max-w-full after:h-[50%] after:border-r-[2px] after:border-preto-claro after:dark:border-branco-claro after:absolute  after:content-[''] after:right-0 after:rounded-lg last:after:hidden "
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center h-[80%] w-full">
          <Loader />
        </div>
      )}
      <div className="flex flex-col">
        <div className="flex p-2">
          Pagina {table.getState().pagination.pageIndex + 1} de{" "}
          {table.getPageCount()}
        </div>
        <div className="flex gap-x-2 px-2">
          <ChevronLeftIcon
            onClick={() => table.previousPage()}
            className={
              "size-6 cursor-pointer bg-branco-escuro dark:bg-preto-azul border-[1px] rounded-sm " +
              (!table.getCanPreviousPage()
                ? "text-cinza-escuro border-cinza-escuro"
                : "text-azul border-azul")
            }
          />
          <ChevronRightIcon
            onClick={() => table.nextPage()}
            className={
              "size-6 cursor-pointer bg-branco-escuro dark:bg-preto-azul border-[1px] rounded-sm " +
              (!table.getCanNextPage()
                ? "text-cinza-escuro border-cinza-escuro"
                : "text-azul border-azul")
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Tabela;
