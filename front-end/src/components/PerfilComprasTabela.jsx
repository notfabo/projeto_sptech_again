import React, { useState } from 'react'
import Tabela from './Tabela';

function PerfilComprasTabela({data}) {

    const [filtros, setFiltros] = useState([]);

    const columns = [
        {
          accessorKey: "clienteNome",
          header: "Nome",
          enableColumnFilter: true,
          filterFn: "includesString",
          size: 220,
        },
        {
          accessorKey: "produtoNome",
          header: "Produto",
          enableSorting: false,
          size: 350,
        },
        {
          accessorKey: "quantidade",
          header: "Qtd.",
          enableSorting: false,
          size: 150,
        },
        {
          accessorKey: "promocaoTitulo",
          header: "Promoção",
          enableColumnFilter: true,
          filterFn: (row, columnId, filterAreas) => {
            if (filterAreas.length === 0) return true;
            const area = row.getValue(columnId);
            return filterAreas.includes(area);
          },
          size: 350,
          cell: (info) => {
            return info.getValue() === null ? "n/a" : info.getValue();
          },
        },
        {
          accessorKey: "valor",
          header: "Valor",
          size: 215,
        },
        {
          accessorKey: "desconto",
          header: "% Desconto",
          size: 200,
        },
        {
          accessorKey: "dataCompra",
          header: "Data",
          enableSorting: false,
          size: 200,
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
  )
}

export default PerfilComprasTabela
