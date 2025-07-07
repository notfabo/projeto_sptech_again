import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";
import {
  UserIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  IdentificationIcon,
  PhoneIcon,
  ShoppingCartIcon,
} from "@heroicons/react/16/solid";
import {
  SparklesIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { ShoppingCartIcon as Cart } from "@heroicons/react/24/outline";
import PerfilPlanosTabela from "../components/PerfilPlanosTabela";
import PerfilComprasTabela from "../components/PerfilComprasTabela";
import PerfilContatosTabela from "../components/PerfilContatosTabela";

function Perfil() {
  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/");
  const cliente = segments[segments.length - 1];

  const [data, setData] = useState([]);
  const [oportunidades, setOportunidades] = useState([]);
  const [compras, setCompras] = useState([]);
  const [contatos, setContatos] = useState([]);
  const [accordionProdutoOpen, setAccordionProdutoOpen] = useState(false);
  const [accordionPlanosOpen, setAccordionPlanosOpen] = useState(false);
  const [accordionCompraOpen, setAccordionCompraOpen] = useState(false);
  const [accordionContatoOpen, setAccordionContatoOpen] = useState(false);
  const [clienteNome, setClienteNome] = useState('');

  useEffect(() => {
    api
    // AQUI RETORNA O NOME E OS DADOS CLIENTE
      .get(`/perfil/cliente/${cliente}`, {})
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log(response.data.clienteNome);
      })
      .catch((error) => {
        console.log(error);
      });

    api
    // AQUI RETORNA OS PLANOS DE AÇÕES/OPORTUNIDADES
      .get(`/oportunidades/porCliente/${cliente}`, {})
      .then((response) => {
        console.log(response.data);
        setOportunidades(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get(`/compras/cliente/${cliente}`, {})
      .then((response) => {
        console.log(response.data);
        setCompras(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .get(`/contatos/cliente/${cliente}`, {})
      .then((response) => {
        console.log(response.data);
        setContatos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-row text-preto dark:text-branco-claro">
      <div className="bg-preto-azul w-3/12 py-32 px-24 flex flex-col gap-y-10 justify-start overflow-auto custom-scrollbar">
        <div className="text-4xl font-semibold w-10">{data.clienteNome}</div>
        <div className="flex flex-row">
          <UserIcon className="w-16 h-16" />
          <div className="flex flex-col justify-start">
            <p className="flex text-2xl">Representante</p>
            <p className="flex text-xl font-bold">{data.representanteNome}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <EnvelopeIcon className="h-8 w-8" />
            <p className="text-xl ml-2">Email</p>
          </div>
          <div>
            <p className="flex text-xl">{data.representanteEmail}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <PhoneIcon className="h-8 w-8" />
            <p className="text-xl ml-2">Telefone</p>
          </div>
          <div>
            <p className="flex text-xl">{data.representanteTelefone}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <IdentificationIcon className="h-8 w-8" />
            <p className="text-xl ml-2">CNPJ</p>
          </div>
          <div>
            <p className="flex text-xl">{data.cnpj}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <CalendarDaysIcon className="h-8 w-8" />
            <p className="text-xl ml-2">Última compra</p>
          </div>
          <div>
            <p className="flex text-xl">{data.latestCompraData}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <ShoppingCartIcon className="h-8 w-8" />
            <p className="text-xl ml-2">Qtd. Compras</p>
          </div>
          <div>
            <p className="flex text-xl">{data.quantidadeCompras}</p>
          </div>
        </div>

        <div className="">
          <div className="py-2">
            <button
              onClick={() => setAccordionProdutoOpen(!accordionProdutoOpen)}
              className="flex justify-between w-full bg-preto-claro items-center h-12 rounded-lg px-2"
            >
              <span className="flex text-xl">Produtos comprados</span>
              {/* {accordionProdutoOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="fill-indigo-500 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${accordionProdutoOpen && "!rotate-180"
                    }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionProdutoOpen && "!rotate-180"
                    }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm  ${accordionProdutoOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
                }`}
            >
              {data.produtosComprados &&
                Array.isArray(data.produtosComprados) &&
                data.produtosComprados.map((p, i) => (
                  <div
                    className="overflow-hidden flex px-2 text-branco-claro text-base"
                    key={i}
                  >
                    {p}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col py-32 w-9/12 items-center overflow-auto custom-scrollbar">
        <div className="w-[90%]">
          <div className="py-2 ">
            <button
              onClick={() => setAccordionPlanosOpen(!accordionPlanosOpen)}
              className="flex justify-between w-full bg-preto-azul items-center h-24 rounded-lg px-2"
            >
              <span className="flex text-3xl items-center">
                {" "}
                <SparklesIcon className="h-14 w-14 ml-4 mr-8" /> Planos de ação
              </span>
              <svg
                className="fill-indigo-500 shrink-0 mr-5"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${accordionPlanosOpen && "!rotate-180"
                    }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionPlanosOpen && "!rotate-180"
                    }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${accordionPlanosOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0 hidden"
                }`}
            >
              <div className={"flex overflow-auto custom-scrollbar"}>
                <PerfilPlanosTabela data={oportunidades} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%]">
          <div className="py-2 ">
            <button
              onClick={() => setAccordionCompraOpen(!accordionCompraOpen)}
              className="flex justify-between w-full bg-preto-azul items-center h-24  rounded-lg px-2"
            >
              <span className="flex text-3xl items-center">
                {" "}
                <Cart className="h-14 w-14 ml-4 mr-8" /> Histórico de compras
              </span>
              {/* {accordionCompraOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="fill-indigo-500 shrink-0 mr-5"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${accordionCompraOpen && "!rotate-180"
                    }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionCompraOpen && "!rotate-180"
                    }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${accordionCompraOpen
                  ? "grid-rows-[1fr] opacity-100 "
                  : "grid-rows-[0fr] opacity-0 hidden"
                }`}
            >
              <div className={"flex overflow-auto custom-scrollbar"}>
                <PerfilComprasTabela data={compras} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90%]">
          <div className="py-2 ">
            <button
              onClick={() => setAccordionContatoOpen(!accordionContatoOpen)}
              className="flex justify-between w-full bg-preto-azul items-center h-24  rounded-lg px-2"
            >
              <span className="flex text-3xl items-center">
                {" "}
                <ChatBubbleLeftRightIcon className="h-14 w-14 ml-4 mr-8" />{" "}
                Histórico de contatos
              </span>
              {/* {accordionContatoOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="fill-indigo-500 shrink-0 mr-5"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${accordionContatoOpen && "!rotate-180"
                    }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionContatoOpen && "!rotate-180"
                    }`}
                />
              </svg>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${accordionContatoOpen
                  ? "grid-rows-[1fr] opacity-100 "
                  : "grid-rows-[0fr] opacity-0 hidden"
                }`}
            >
              <div className={"flex overflow-auto custom-scrollbar"}>
                <PerfilContatosTabela data={contatos} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
