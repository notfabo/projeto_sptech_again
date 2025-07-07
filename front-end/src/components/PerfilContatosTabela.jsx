import React, { useState } from "react";
import Tabela from "./Tabela";

function PerfilContatosTabela({ data }) {
  const [filtros, setFiltros] = useState([]);

  const columns = [
    {
      accessorKey: "nomeCliente",
      header: "Nome",
      enableColumnFilter: true,
      filterFn: "includesString",
      size: 195,
    },
    {
      accessorKey: "nomeRepresentante",
      header: "Representante",
      enableSorting: true,
      size: 240,
    },
    {
      accessorKey: "contatoDataHora",
      header: "Data",
      enableSorting: false,
      size: 250,
    },
    {
      accessorKey: "motivo",
      header: "Motivo",
      size: 650,
    },
    {
      accessorKey: "nomeProduto",
      header: "Produto",
      enableColumnFilter: true,
      filterFn: (row, columnId, filterAreas) => {
        if (filterAreas.length === 0) return true;
        const nomeProduto = row.getValue(columnId);
        console.log(filterAreas);
        return filterAreas.includes(nomeProduto);
      },
      size: 350,
    },
  ];
  return (
    <div className="bg-branco-medio dark:bg-preto-claro flex flex-col text-preto dark:text-branco-claro pb-2">
      <Tabela
        data={data}
        nomeTabela={"Lista de Oportunidades"}
        columns={columns}
        icone={"SparklesIcon"}
        pesquisa={"cliente"}
        filtros={filtros}
        filtar={"produto"}
        booleanFiltros={false}
      />
    </div>
  );
}

export default PerfilContatosTabela;
