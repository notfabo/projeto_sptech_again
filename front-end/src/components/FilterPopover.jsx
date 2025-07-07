import React, { useState, useEffect } from "react";
import { Popover, Checkbox, Label } from "flowbite-react";
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const CheckItem = ({ filtro, isChecked, handleCheckboxChange }) => (
  <div className="flex items-center gap-x-2">
    <Checkbox
      id={filtro.id}
      name={filtro.id}
      value={filtro.id}
      className="text-azul w-5 h-5"
      checked={isChecked}
      onChange={() => handleCheckboxChange(filtro.nome)}
    />
    <Label className="text-base" htmlFor={filtro.id}>
      {filtro.nome}
    </Label>
  </div>
);

function FilterPopover({ filtros, columnFilters, setColumnFilters, filtar }) {
  const [localFilters, setLocalFilters] = useState([]);

  useEffect(() => {
    const initialFilters = columnFilters.find((f) => f.id === filtar)?.value || [];
    setLocalFilters(initialFilters);
  }, [columnFilters, filtar]);

  const handleCheckboxChange = (filtroNome) => {
    setLocalFilters((prev) => {
      let updatedFilters;
      if (prev.includes(filtroNome)) {
        updatedFilters = prev.filter((nome) => nome !== filtroNome);
      } else {
        updatedFilters = [...prev, filtroNome];
      }

      setColumnFilters((prevFilters) => {
        const filters = prevFilters.map((f) =>
          f.id === filtar ? { ...f, value: updatedFilters } : f
        );
        if (!filters.find((f) => f.id === filtar)) {
          filters.push({ id: filtar, value: updatedFilters });
        }
        return filters;
      });

      return updatedFilters;
    });
  };

  return (
    <div>
      <Popover
        aria-labelledby="default-popover"
        content={
          <div className="w-80 text-sm text-cinza-escuro">
            <div className="border-b border-cinza bg-cinza px-3 py-2 dark:border-cinza-escuro dark:bg-preto-azul flex">
              <h3
                id="default-popover"
                className="font-semibold text-lg dark:text-branco-claro text-preto"
              >
                Filtrado por:
              </h3>
            </div>
            <div className="px-3 py-2 flex flex-col items-start dark:bg-preto-claro gap-2">
              {filtros.map((filtro) => (
                <CheckItem
                  key={filtro.id}
                  filtro={filtro}
                  isChecked={localFilters.includes(filtro.nome)}
                  handleCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
          </div>
        }
        arrow={false}
      >
        <button className="flex items-center 2xl:text-xl xl:text-sm gap-x-1 border-[0.5px] rounded-md p-1 border-preto dark:border-branco-claro">
          <AdjustmentsHorizontalIcon className="2xl:size-7 xl:size-5" /> Filtros
          <ChevronDownIcon className="2xl:size-5 xl:size-4 pt-1 stroke-2" />
        </button>
      </Popover>
    </div>
  );
}

export default FilterPopover;
