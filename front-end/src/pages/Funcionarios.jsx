import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TabelaFuncionarios from "../components/TabelaFuncionarios";
import Loader from "../components/Loader";


function Funcionarios() {
  const [vendedores, setVendedores] = useState([]);
  const [update, setUpdate] = useState(false);

  const updateUpdate = () => {
    setUpdate(!update);
  };


  useEffect(() => {
    setVendedores([]);
    api
      .get(`/gerentes/${localStorage.IDGERENTE}/details`, {})
      .then((response) => {
        // console.log(response.data.vendedores);
        setVendedores(response.data.vendedores);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen text-preto dark:text-branco-claro flex justify-center items-center">
      <div className="bg-preto-azul px-28 py-10 flex justify-center items-center flex-col gap-y-4">
        <p className="font-bold text-3xl">Acesso de funcionários</p> 
        <div>
          {vendedores.length > 0 ? <TabelaFuncionarios data={vendedores} updateUpdate={updateUpdate}/> : <Loader/>}
        </div>
      </div>
    </div>
  );
}

export default Funcionarios;
