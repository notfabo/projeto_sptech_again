import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Tabela from "../components/Tabela";

function Contatos() {
  const [data, setData] = useState([]);
  const [filtros, setFiltros] = useState([]);

  useEffect(() => {
    const userType = localStorage.ROLE;

    if (userType === "vendedor") {
    api
      .get(`/contatos/vendedor/${localStorage.IDVENDEDOR}`, {})
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (userType === "gerente") {
      api
      .get(`/contatos/gerente/${localStorage.IDGERENTE}`, {})
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
      if (!filtrosMap.has(item.nomeProduto)) {
        filtrosMap.set(item.nomeProduto, item.idContato);
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
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-col text-preto dark:text-branco-claro 2xl:pt-28 xl:pt-16 pb-24 px-24">
      <Tabela
        data={data}
        nomeTabela={"Lista de contatos"}
        columns={columns}
        icone={"ChatBubbleLeftRightIcon"}
        pesquisa={"nomeCliente"}
        filtar={"nomeProduto"}
        filtros={filtros}
        booleanFiltros={true}
      />
    </div>
  );
}

export default Contatos;
