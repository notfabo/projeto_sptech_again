import React, { useEffect, useState } from "react";
import api from "../api/axios";
import apiDolar from '../api/axiosPython';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

function Home() {

  const [dolarData, setDolarData] = useState(null);
  const [totalClientes, setTotalClientes] = useState(0);
  const [ultimaOportunidade, setUltimaOportunidade] = useState(null);
  const [noticias, setNoticias] = useState([]);
  // const [noticiasHpe, setNoticiasHpe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDolar = async () => {
      try {
        const response = await apiDolar.get('/dolar');
        setDolarData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados do dólar:", error);
      }
    };

    const fetchNoticias = async () => {
      try {
        const response = await apiDolar.get('/noticias');
        setNoticias(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    // const fetchNoticiasHpe = async () => {
    //   try {
    //     const response = await apiDolar.get('/hpe_noticias');
    //     setNoticiasHpe(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error("Erro ao buscar notícias:", error);
    //   }
    // };

    const fetchTotalClientes = async () => {
      try {
        const response = await api.get(`/clientes/gerente/${localStorage.IDGERENTE}/total`, {});
        setTotalClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar total de clientes:", error);
      }
    };

    const fetchUltimaOportunidade = async () => {
      try {
        const response = await api.get(`/oportunidades/porGerente/${localStorage.IDGERENTE}/ultimo`);
        setUltimaOportunidade(response.data[0]);
      } catch (error) {
        console.error("Erro ao buscar última oportunidade:", error);
      }
    };

    fetchDolar();
    fetchNoticias();
    // fetchNoticiasHpe();
    fetchTotalClientes();
    fetchUltimaOportunidade();
  }, []);

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-full text-preto dark:text-branco-claro flex flex-col items-center">
      <p className="text-5xl mt-40">
        Bem-vindo, <span className="text-azul font-semibold">{localStorage.NOME}</span>!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full p-10">
        {/* Dólar Hoje */}
        <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-5 rounded-lg shadow-md relative min-h-[150px]">
          {dolarData && (
            <div className="flex flex-col justify-between items-start min-h-[150px]">
              <p className="text-4xl md:text-3xl sm:text-2xl">Dólar Hoje</p>
              <p className="text-5xl md:text-4xl sm:text-3xl font-bold">R$ {dolarData.today.bid}</p>
            </div>
          )}
          {dolarData && (
            <div className="absolute bottom-0 right-0 p-5">
              <p className="text-xs sm:text-[10px] text-right">Dólar 30 dias atrás</p>
              <p className="text-lg sm:text-base font-bold text-right">R$ {dolarData.seven_days_ago.bid}</p>
            </div>
          )}
        </div>

        {/* Clientes Ativos */}
        <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-5 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[60px]">
          <p className="text-4xl">Clientes Ativos</p>
          <p className="text-6xl font-bold">{totalClientes}</p>
        </div>

        {/* Última Oportunidade */}
        <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-5 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[60px]">
          <p className="text-lg">Última Oportunidade</p>
          {ultimaOportunidade ? (
            <div>
              <p className="text-sm text-left mt-2">{ultimaOportunidade.motivo}</p>
            </div>
          ) : (
            <p className="text-sm">Nenhuma oportunidade disponível.</p>
          )}
          <button className="mt-1 text-blue-500" onClick={() => navigate('/oportunidades')}>Ver mais →</button>
        </div>

        {/* Vendedor Destaque */}
        <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-5 rounded-lg shadow-md flex flex-col justify-between items-start min-h-[60px]">
          <p className="text-3xl">Vendedor Destaque</p>
          <p className="text-5xl font-bold">Victor Roque</p>
        </div>
      </div>

      <p className="text-3xl mt-10 text-left w-full pl-10">
        Notícias <span className="itforum">IT Forum</span>!
      </p>

      {/* Carrossel de Notícias */}
      <div className="w-full p-10 text-left">
        <Swiper className=""
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {noticias.map((noticia, index) => (
            <SwiperSlide key={index}>
              <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-lg font-bold line-clamp-3">{noticia.titulo}</p>
                  <p className="text-sm mt-5 line-clamp-2">
                    {noticia.texto}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-xs">{noticia.autor} em {noticia.data}</p>
                  {noticia.imagem && (
                    <img src={noticia.imagem} alt="Notícia" className="mt-4 h-40 w-full object-cover rounded-md" />
                  )}
                </div>
                <button
                  className="mt-4 text-blue-500"
                  onClick={() => window.open(noticia.url, "_blank")}
                >
                  Ver mais →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <p className="text-3xl mt-10 text-left w-full pl-10">
        Notícias <span className="hpe-title">HPE</span>!
      </p> */}

      {/* <div className="w-full p-10 text-left">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {noticiasHpe.map((noticiaHpe, index) => (
            <SwiperSlide key={index}>
              <div className="bg-branco dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-md flex flex-col h-full">
                <div className="flex-1">
                  <p className="text-lg font-bold line-clamp-3">{noticiaHpe.titulo}</p>
                  <p className="text-sm mt-5">
                    {noticiaHpe.texto}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-xs">{noticiaHpe.autor} em {noticiaHpe.data}</p>
                  {noticiaHpe.imagem && (
                    <img src={noticiaHpe.imagem} alt="Notícia" className="mt-4 h-40 w-full object-cover rounded-md" />
                  )}
                </div>
                <button
                  className="mt-4 text-blue-500"
                  onClick={() => window.open(noticiaHpe.url, "_blank")}
                >
                  Ver mais →
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
}

export default Home;
