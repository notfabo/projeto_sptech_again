import {
  ArrowsUpDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Switch } from "antd";
import api from "../api/axios";

function TabelaFuncionarios({ data, updateUpdate }) {
  const [columnFilters, setColumnFilters] = useState([]);
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 12 });


  const columns = [
    {
      accessorKey: "nome",
      header: "Nome",
      enableColumnFilter: true,
      filterFn: "includesString",
      size: 300,
      cell: (props) => <p>{props.getValue()}</p>,
    },
    {
      accessorKey: "email",
      header: "Email",
      enableSorting: false,
      size: 350,
    },
    {
      accessorKey: "aprovado",
      header: "Acesso",
      enableSorting: false,
      size: 150,
      cell: ({ row }) => {
        const { aprovado, idVendedor } = row.original;

        const handleChange = (checked) => {
          if (aprovado){
            api
            .post(`/vendedores/reprovar/${idVendedor}`, {})
            .then((response) => {
              // console.log(idVendedor, 'reprovado');
              // console.log(response.data);
              updateUpdate();
            })
            .catch((error) => {
              console.log(error);
            });
          } else {
            api
            .post(`/vendedores/aprovar/${idVendedor}`, {})
            .then((response) => {
              // console.log(idVendedor, 'aprovado');
              // console.log(response.data);
              updateUpdate();
            })
            .catch((error) => {
              console.log(error);
            });
          }
        };

        return <Switch defaultChecked={aprovado} onChange={handleChange} />;
      },
    },
  ];

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
      {table.getRowModel().rows.map((row) => (
        <div className="flex w-fit" key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <div
              style={{ width: cell.column.getSize() }}
              className="relative flex last:justify-center items-center text-preto dark:text-branco-claro 2xl:text-lg xl:text-sm 2xl:p-2 xl:p-1 bg-transparent max-w-full after:h-[50%] after:border-r-[2px] after:border-preto-claro after:dark:border-branco-claro after:absolute  after:content-[''] after:right-0 after:rounded-lg last:after:hidden"
              key={cell.id}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default TabelaFuncionarios;
