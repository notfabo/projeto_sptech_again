import React, { useEffect, useState } from "react";
import api from "../api/axios";
import Tabela from "../components/Tabela";
import { Tooltip } from "antd";
import ModalDesc from "../components/ModalDesc";

function Produtos() {
  const [data, setData] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [openModalDesc, setOpenModalDesc] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalDescDescricao, setModalDescDescricao] = useState("");

  useEffect(() => {
    const filtrosMap = new Map();

    data.forEach((item) => {
      if (!filtrosMap.has(item.categoria)) {
        filtrosMap.set(item.categoria, item.idProduto);
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

  useEffect(() => {
    const userType = localStorage.ROLE;
    if (userType === "vendedor") {
    api
      .get(`/produtos/vendedor/${localStorage.IDVENDEDOR}`, {})
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    } else if (userType === "gerente") {
      api
    .get(`/produtos/gerente/${localStorage.IDGERENTE}`, {})
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    }
  }, []);

  const handleMotivoClick = (value, titulo) => {
    if (value.length > 10) {
      setModalDescDescricao(value);
      setModalTitulo(titulo);
      setOpenModalDesc(true);
      console.log(value);
    }
  };

  const columns = [
    {
      accessorKey: "nome",
      header: "Nome",
      enableColumnFilter: true,
      filterFn: "includesString",
      size: 250,
    },
    {
      accessorKey: "descricao",
      header: "Descrição",
      enableSorting: false,
      size: 400,
      cell: ({ row }) => {
        const descricaoCompleta = row.original.descricao || "";
        const descricaoResumida =
          descricaoCompleta.length > 30
            ? `${descricaoCompleta.substring(0, 30)}...`
            : descricaoCompleta;

        return (
          <div
            className="cursor-pointer py-1 px-8 font-medium hover:bg-branco-claro transition-all hover:text-azul rounded-full"
            onClick={() =>
              handleMotivoClick(row.original.descricao, "Descrição")
            }
          >
            {descricaoResumida}
          </div>
        );
      },
    },
    {
      accessorKey: "geracao",
      header: "Geração",
      enableSorting: true,
      size: 200,
    },
    {
      accessorKey: "categoria",
      header: "Categoria",
      enableColumnFilter: true,
      filterFn: (row, columnId, filterAreas) => {
        if (filterAreas.length === 0) return true;
        const area = row.getValue(columnId);
        console.log(filterAreas);
        return filterAreas.includes(area);
      },
      size: 350,
    },
    {
      accessorKey: "preco",
      header: "Preço",
      size: 270,
    },
    {
      accessorKey: "ultimaCompra",
      header: "Ult. Compra",
      enableSorting: false,
      size: 210,
    },
  ];

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-col text-preto dark:text-branco-claro 2xl:pt-28 xl:pt-16 pb-24 px-24">
      <Tabela
        data={data}
        nomeTabela={"Lista de produtos"}
        columns={columns}
        icone={"ShoppingCartIcon"}
        pesquisa={"nome"}
        filtros={filtros}
        filtar={"categoria"}
        booleanFiltros={true}
      />
      {openModalDesc && (
        <ModalDesc
          closeModal={setOpenModalDesc}
          descricao={modalDescDescricao}
          titulo={modalTitulo}
        />
      )}
    </div>
  );
}

export default Produtos;
