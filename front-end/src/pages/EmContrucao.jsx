import React from "react";
import api from "../api/axios";

function EmContrucao() {
  api.get("/oportunidades/porCliente/meta").then((res) => {
    console.log(res.data);
  });

  return <div></div>;
}

export default EmContrucao;
