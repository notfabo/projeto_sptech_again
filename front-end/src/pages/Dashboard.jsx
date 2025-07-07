import React, { useState, useEffect } from 'react';
import api from "../api/axios";
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

function Dashboard() {
  const idGerente = localStorage.getItem("IDGERENTE");

  const [vendas, setVendas] = useState(0);
  const [mesVendas, setMesVendas] = useState(9);
  const [dropdownVendasOpen, setDropdownVendasOpen] = useState(false);

  const [mesRating, setMesRating] = useState(9);
  const [mediaRating, setMediaRating] = useState(0.0);
  const [dropdownRatingOpen, setDropdownRatingOpen] = useState(false);

  const [mesMaisVendidos, setMesMaisVendidos] = useState(9);
  const [produtosMaisVendidos, setProdutosMaisVendidos] = useState([]);
  const [dropdownMaisVendidosOpen, setDropdownMaisVendidosOpen] = useState(false);

  const [oportunidades, setOportunidades] = useState(0);
  const [mesOportunidades, setMesOportunidades] = useState(9);
  const [dropdownOportunidadesOpen, setDropdownOportunidadesOpen] = useState(false);

  const [vendas2024, setVendas2024] = useState([]);
  const [vendas2023, setVendas2023] = useState([]);
  const [mostrarComparacao, setMostrarComparacao] = useState(false);

  const [dadosCustoOportunidades, setDadosCustoOportunidades] = useState([]);

  const [vendasArea, setVendasArea] = useState([]);
  const [mesVendasArea, setMesVendasArea] = useState(5);
  const [dropdownVendasAreaOpen, setDropdownVendasAreaOpen] = useState(false);



  const meses = [
    { nome: "Janeiro", valor: 1 },
    { nome: "Fevereiro", valor: 2 },
    { nome: "Março", valor: 3 },
    { nome: "Abril", valor: 4 },
    { nome: "Maio", valor: 5 },
    { nome: "Junho", valor: 6 },
    { nome: "Julho", valor: 7 },
    { nome: "Agosto", valor: 8 },
    { nome: "Setembro", valor: 9 },
    { nome: "Outubro", valor: 10 },
    { nome: "Novembro", valor: 11 },
    { nome: "Dezembro", valor: 12 },
  ];

  useEffect(() => {
    const fetchVendas = async () => {
      try {
        const response = await api.get(`/compras/gerente/${idGerente}/vendas?mes=${mesVendas}`);
        setVendas(response.data);
      } catch (error) {
        console.error("Erro ao buscar as vendas", error);
      }
    };
    fetchVendas();
  }, [mesVendas]);

  useEffect(() => {
    const fetchProdutosMaisVendidos = async () => {
      try {
        const response = await api.get(`/compras/maisVendidos/mes/${mesMaisVendidos}`);
        console.log("Dados dos produtos mais vendidos: ", response.data);
        setProdutosMaisVendidos(response.data);
      } catch (error) {
        console.error("Erro ao buscar os produtos mais vendidos", error);
      }
    };
    fetchProdutosMaisVendidos();
  }, [mesMaisVendidos]);

  useEffect(() => {
    const fetchOportunidades = async () => {
      try {
        const response = await api.get(`/oportunidades/porGerente/${idGerente}/oportunidadesMes/${mesOportunidades}`);
        setOportunidades(response.data);
      } catch (error) {
        console.error("Erro ao buscar as oportunidades", error);
      }
    };
    fetchOportunidades();
  }, [mesOportunidades]);


  const handleMesChange = (setMesFunction, mesValor) => {
    setMesFunction(mesValor);
  };

  const fetchVendasPorAno = async (ano, setVendas) => {
    try {
      const response = await api.get(`/compras/vendas/ano/${ano}`);
      setVendas(response.data);
      console.log(`Vendas de ${ano}: `, response.data);
    } catch (error) {
      console.error(`Erro ao buscar as vendas de ${ano}`, error);
    }
  };

  useEffect(() => {
    fetchVendasPorAno(2024, setVendas2024);
  }, []);

  const handleMostrarComparacao = () => {
    if (!mostrarComparacao) {
      fetchVendasPorAno(2023, setVendas2023);
    }
    setMostrarComparacao(!mostrarComparacao);
  };

  useEffect(() => {
    const fetchMediaRating = async () => {
      try {
        const response = await api.get(`/feedbacks/media?mes=${mesRating}`);
        setMediaRating(response.data); 
      } catch (error) {
        console.error("Erro ao buscar a média de avaliação", error);
      }
    };
    fetchMediaRating();
  }, [mesRating]);

  useEffect(() => {
    const fetchCustoOportunidades = async () => {
      try {
        const response = await api.get(`/oportunidades/porGerente/${idGerente}/oportunidadesAno2024/somaCusto`);
        setDadosCustoOportunidades(response.data);
        console.log("CUSTO OPORTUNIDADES: ", response.data);
      } catch (error) {
        console.error('Erro ao buscar o custo das oportunidades', error);
      }
    };
    fetchCustoOportunidades();
  }, [idGerente]);

  useEffect(() => {
    const fetchVendasArea = async () => {
      try {
        const response = await api.get(`/compras/vendas/mes/${mesVendasArea}/area`);
        console.log("Dados de vendas por área: ", response.data);
        setVendasArea(response.data);
      } catch (error) {
        console.error("Erro ao buscar as vendas por área", error);
      }
    };
    fetchVendasArea();
  }, [mesVendasArea]);

  const handleMesVendasAreaChange = (mesValor) => {
    setMesVendasArea(mesValor);
  };

  // Dados e opções para o gráfico de barras vertical
  const data = {
    labels: produtosMaisVendidos.map(produto => produto.first),
    datasets: [
      {
        label: 'Vendas',
        data: produtosMaisVendidos.map(produto => produto.second),
        backgroundColor: '#1A56EF',
        borderWidth: 0,
      },
    ],
  };
  console.log("Dados para o gráfico: ", data);

  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: { color: "white", beginAtZero: true },
      },
    },
  };

  // Configurar dados para o gráfico
  const dataVendasAnual = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    datasets: [
      {
        label: 'Vendas 2024',
        data: vendas2024.map(venda => venda.second),
        backgroundColor: '#1A56EF',
        borderWidth: 0,
      },
      mostrarComparacao && {
        label: 'Vendas 2023',
        data: vendas2023.map(venda => venda.second),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderWidth: 0,
      },
    ].filter(Boolean),
  };

  const optionsVendasAnual = {
    maintainAspectRatio: false,
    indexAxis: 'x',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "white", beginAtZero: true },
        grid: {
          display: false,
        }
      },
      y: {
        title: {
          display: true,
          text: 'Quantidade vendas',
          color: "white",
        },
        ticks: { color: "white", beginAtZero: true },
        grid: {
          display: false,
        }
      },
    },
  };


  const mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const dataCustoOp = {

    labels: Object.keys(dadosCustoOportunidades).map(mes => mesesNomes[mes - 1]),
    datasets: [
      {
        label: 'Custo das Oportunidades',
        data: Object.values(dadosCustoOportunidades),
        borderColor: '#1A56EF',
        backgroundColor: '#1A56EF',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const optionsCustoOp = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    
    scales: {
      x: {
        title: {
          display: false,
          text: 'Meses',
        },
        ticks: { color: "white" },
        grid: {
          display: false,
        }
      },
      y: {
        title: {
          display: true,
          text: 'Custo Total (R$)',
          color: "white",
        },
        ticks: { color: "white" },
        grid: {
          display: false,
        },
        beginAtZero: true,
      },
    },
  };

  // Dados e opções para o gráfico de Doughnut
  const dataVendasArea = {
    labels: vendasArea.map(venda => venda.first),
    datasets: [
      {
        label: 'Vendas por Área',
        data: vendasArea.map(venda => venda.third),
        backgroundColor: ['#2F81F7', '#00A3FF', '#073098', '#1A56EF', '#243B76', '#4671DE'],
        hoverBackgroundColor: ['#2F81F7', '#00A3FF', '#073098', '#1A56EF', '#243B76', '#4671DE'],
        borderWidth: 0,
      },
    ],
  };

  const optionsVendasArea = {
    
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: true,
        labels: {
          color: 'white', 
        },
      },
    },
  };


  return (
    <div className="bg-branco-medio dark:bg-preto-claro text-preto dark:text-branco-claro items-center flex">
      <div className="flex flex-wrap w-full p-10 mt-24 gap-6">

        {/* KPIs + Caixa Cinza */}
        <div className="flex w-full gap-6">

          {/* KPIs e Caixa Cinza */}
          <div className="flex flex-col w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[200px] flex flex-wrap justify-between p-5">
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-2xl text-azul font-bold">
                    Vendas mensais <span className='text-gray-500 font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>{meses.find(mes => mes.valor === mesVendas)?.nome}</span>
                  </h2>
                  <p className="text-7xl font-bold">{vendas}</p>
                </div>
                <div>
                  <div className="relative">
                    <button onClick={() => setDropdownVendasOpen(!dropdownVendasOpen)} className="text-2xl">⋮</button>
                    {dropdownVendasOpen && (
                      <ul className="absolute bg-gray-600 shadow-md rounded-lg mt-2 z-10">
                        {meses.map(mes => (
                          <li key={mes.valor} className="p-2 cursor-pointer hover:bg-azul"
                            onClick={() => {
                              handleMesChange(setMesVendas, mes.valor);
                              setDropdownVendasOpen(false);
                            }}>
                            {mes.nome}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[200px] flex flex-wrap justify-between p-5">
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-2xl text-azul font-bold">
                    Quantidade de <span className='text-gray-500 font-normal'>|</span > <span className='text-gray-500 text-2xl font-normal'>{meses.find(mes => mes.valor === mesOportunidades)?.nome}</span><br />
                    <span className='items-start justify-items-start flex'>oportunidades criadas</span>
                  </h2>
                  <p className="text-7xl font-bold">{oportunidades}</p>
                </div>
                <div className="relative">
                  <button onClick={() => setDropdownOportunidadesOpen(!dropdownOportunidadesOpen)} className="text-2xl">⋮</button>
                  {dropdownOportunidadesOpen && (
                    <ul className="absolute bg-gray-600 shadow-md rounded-lg mt-2 z-10">
                      {meses.map(mes => (
                        <li key={mes.valor} className="p-2 cursor-pointer hover:bg-azul"
                          onClick={() => {
                            handleMesChange(setMesOportunidades, mes.valor);
                            setDropdownOportunidadesOpen(false);
                          }}>
                          {mes.nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* KPI Média de Rating */}
              <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[200px] flex flex-wrap justify-between p-5">
                <div className="flex flex-col items-start justify-between">
                  <h2 className="text-xl items-start text-azul font-bold">
                    Média avaliação <span className='text-gray-500 text-2xl font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>{meses.find(mes => mes.valor === mesRating)?.nome}</span>
                    <span className='items-start justify-items-start flex'>das oportunidades</span>
                  </h2>
                  <p className="text-7xl font-bold">{mediaRating}<span className='text-4xl'>/5</span></p>
                </div>
                <div className="relative">
                  <button onClick={() => setDropdownRatingOpen(!dropdownRatingOpen)} className="text-2xl">⋮</button>
                  {dropdownRatingOpen && (
                    <ul className="absolute bg-gray-600 shadow-md rounded-lg mt-2 z-10">
                      {meses.map(mes => (
                        <li key={mes.valor} className="p-2 cursor-pointer hover:bg-azul"
                          onClick={() => {
                            handleMesChange(setMesRating, mes.valor);
                            setDropdownRatingOpen(false);
                          }}>
                          {mes.nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* VENDAS ANUAIS */}
            <div className="flex gap-6">
              <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[376px] flex flex-col w-full p-5 mt-6">
                <div className='flex flex-wrap justify-between'>
                  <h2 className="text-2xl text-azul font-bold">
                    Vendas Anuais <span className='text-gray-500 text-2xl font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>2024</span>
                    </h2>
                  <button
                    onClick={handleMostrarComparacao}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
                  >
                    {mostrarComparacao ? "Ocultar Comparação com 2023" : "Mostrar Comparação com 2023"}
                  </button>
                </div>
                <div className="h-[300px]">
                  <Bar data={dataVendasAnual} options={optionsVendasAnual} />
                </div>
              </div>
            </div>
          </div>

          {/* VENDA PRODUTOS MES */}
          <div className="w-1/3 flex flex-col">
            <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[600px] ">
              <div className='flex flex-wrap justify-between p-5'>
                <h2 className="text-2xl items-start text-azul font-bold">
                  Produtos mais vendidos no mês <span className='text-gray-500 text-2xl font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>{meses.find(mes => mes.valor === mesMaisVendidos)?.nome}</span>
                </h2>
                <div className="relative">
                  <button onClick={() => setDropdownMaisVendidosOpen(!dropdownMaisVendidosOpen)} className="text-2xl">⋮</button>
                  {dropdownMaisVendidosOpen && (
                    <ul className="absolute bg-gray-600 shadow-md rounded-lg mt-2 z-10">
                      {meses.map(mes => (
                        <li key={mes.valor} className="p-2 cursor-pointer hover:bg-azul"
                          onClick={() => {
                            handleMesChange(setMesMaisVendidos, mes.valor);
                            setDropdownMaisVendidosOpen(false);
                          }}>
                          {mes.nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="bg-branco text-black dark:text-white shadow-md h-[500px] p-4">
                <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full gap-6'>
          {/* Caixa laranja */}
          <div className='flex flex-col w-2/3'>
            <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[376px] flex flex-col w-full p-5">
              <div className='flex flex-wrap justify-between'>
                <h2 className="text-2xl text-azul font-bold">
                  Custo das oportunidades criadas (R$) <span className='text-gray-500 text-2xl font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>2024</span>
                </h2>
              </div>
              <div className="h-[300px] mt-4">
                <Line data={dataCustoOp} options={optionsCustoOp} />
              </div>
            </div>
          </div>

          {/* Caixa roxo */}
          <div className='flex flex-col w-1/3'>
            <div className="bg-branco dark:bg-preto-azul text-black dark:text-white rounded-lg shadow-md h-[376px] p-5">
              <div className='flex flex-wrap justify-between'>
                <h2 className="text-2xl text-azul font-bold">
                  Vendas por Área <span className='text-gray-500 text-2xl font-normal'>|</span> <span className='text-gray-500 text-2xl font-normal'>{meses.find(mes => mes.valor === mesVendasArea)?.nome}</span>
                </h2>

                {/* Dropdown para selecionar o mês */}
                <div className="relative">
                  <button onClick={() => setDropdownVendasAreaOpen(!dropdownVendasAreaOpen)} className="text-2xl text-white">⋮</button>
                  {dropdownVendasAreaOpen && (
                    <ul className="absolute bg-gray-600 shadow-md rounded-lg mt-2 z-10">
                      {meses.map(mes => (
                        <li key={mes.valor} className="p-2 cursor-pointer hover:bg-azul"
                          onClick={() => {
                            handleMesVendasAreaChange(mes.valor);
                            setDropdownVendasAreaOpen(false);
                          }}>
                          {mes.nome}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Gráfico Doughnut */}
              <div className="h-[300px] justify-center flex">
                <Doughnut data={dataVendasArea} options={optionsVendasArea} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
