import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Tabela from "../components/Tabela";
import { Link } from "react-router-dom";

function Carteira() {
  const [data, setData] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    const userType = localStorage.ROLE;

    if (userType === "vendedor") {
      api
        .get(`/clientes/vendedor/${localStorage.IDVENDEDOR}`, {})
        .then((response) => {
          console.log(response.data);
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userType === "gerente") {
      api
        .get(`/clientes/gerente/${localStorage.IDGERENTE}`, {})
        .then((response) => {
          console.log(response.data);
          setData(response.data);  
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  //poderia ser um componente
  useEffect(() => {
    const filtrosMap = new Map();

    data.forEach((item) => {
      if (!filtrosMap.has(item.area)) {
        filtrosMap.set(item.area, item.idCliente);
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
      size: 200,
      cell: ({row}) => {
        return (
          <Link to={`/perfil/${row.original.clienteNome}`} className="cursor-pointer py-1 px-8 font-medium hover:bg-branco-claro transition-all hover:text-azul rounded-full">
            {row.original.clienteNome}
          </Link>
        );
      },
    },
    {
      accessorKey: "cnpj",
      header: "CNPJ",
      enableSorting: false,
      size: 250,
    },
    {
      accessorKey: "embarque",
      header: "Embarque",
      enableSorting: false,
      size: 200,
    },
    {
      accessorKey: "area",
      header: "Áreas",
      enableColumnFilter: true,
      filterFn: (row, columnId, filterAreas) => {
        console.log("aqui", filterAreas);
        if (filterAreas.length === 0) return true;
        const area = row.getValue(columnId);
        console.log("aqui", filterAreas);
        return filterAreas.includes(area);
      },
      size: 350,
    },
    {
      accessorKey: "representanteNome",
      header: "Representante",
      size: 270,
    },
    {
      accessorKey: "latestCompraData",
      header: "Ult. Compra",
      enableSorting: false,
      size: 200,
    },
    {
      accessorKey: "latestContatoData",
      header: "Ult. Contato",
      enableSorting: false,
      size: 200,
    },
  ];

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-col text-preto dark:text-branco-claro 2xl:pt-28 xl:pt-16 pb-24 px-24">
      <Tabela
        data={data}
        nomeTabela={"Lista de clientes"}
        columns={columns}
        icone={"ListBulletIcon"}
        pesquisa={"clienteNome"}
        filtros={filtros}
        filtar={"area"}
        booleanFiltros={true}
      />
    </div>
  );
}

export default Carteira;
