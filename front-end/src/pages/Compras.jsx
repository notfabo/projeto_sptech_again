import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Tabela from "../components/Tabela";

function Compras() {
  const [data, setData] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    const userType = localStorage.ROLE;

    if (userType === "vendedor") {
      api
        .get(`/compras/vendedor/${localStorage.IDVENDEDOR}`, {})
        .then((response) => {
          const modifiedData = response.data.map((item) => ({
            ...item,
            promocaoTitulo:
              item.promocaoTitulo === null ? "N/A" : item.promocaoTitulo,
            desconto: item.desconto === null ? "N/A" : item.desconto,
          }));
          console.log(modifiedData);
          setData(modifiedData);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userType === "gerente") {
      api
        .get(`/compras/gerente/${localStorage.IDGERENTE}`, {})
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  useEffect(() => {
    const filtrosMap = new Map();

    data.forEach((item) => {
      if (!filtrosMap.has(item.promocaoTitulo)) {
        filtrosMap.set(item.promocaoTitulo, item.idCliente);
      }
    });

    const filtrosExtrair = Array.from(filtrosMap, ([nome, id]) => ({
      id,
      nome,
    }));

    if (JSON.stringify(filtrosExtrair) !== JSON.stringify(filtros)) {
      setFiltros(filtrosExtrair);
    }
  }, [data, filtros]);

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
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-col text-preto dark:text-branco-claro 2xl:pt-28 xl:pt-16 pb-24 px-24">
      <Tabela
        data={data}
        nomeTabela={"Lista de compras"}
        columns={columns}
        icone={"CurrencyDollarIcon"}
        pesquisa={"clienteNome"}
        filtros={filtros}
        filtar={"promocaoTitulo"}
        booleanFiltros={true}
      />
    </div>
  );
}

export default Compras;
