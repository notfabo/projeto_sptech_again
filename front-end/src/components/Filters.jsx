import React from "react";

function Filters({ columnFilters, setColumnFilters, pesquisa }) {
  const clienteNome = columnFilters.find((f) => f.id === pesquisa)?.value || "";

  const onFilterChange = (id, value) =>
    setColumnFilters((prev) =>
      prev
        .filter((f) => f.id !== id)
        .concat({
          id,
          value,
        })
    );
  return (
    <div>
      <input
        className=" text-preto bg-cinza 2xl:h-10 xl:h-[30px] rounded-lg 2xl:px-4 xl:px-2 2xl:w-96 xl:w-48"
        placeholder="Pesquisa"
        type="search"
        value={clienteNome}
        onChange={(e) => onFilterChange(pesquisa, e.target.value)}
      />
    </div>
  );
}

export default Filters;
