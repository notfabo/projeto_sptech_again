import React, { useEffect, useState } from "react";
import api from "../api/axios";
import apiDolar from '../api/axiosPython';
import ModalDesc from "../components/ModalDesc";
import CustomAlert from "../components/CustomAlert";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { FaStar, FaCaretDown, FaCaretUp, FaUserCircle } from "react-icons/fa";
import ModalFeedback from "../components/ModalFeedback";

function Oportunidades() {
  const [data, setData] = useState([]);
  const [openModalDesc, setOpenModalDesc] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalDescDescricao, setModalDescDescricao] = useState("");
  const [ratings, setRatings] = useState({});
  const [hoverRatings, setHoverRatings] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpenModalFeedback] = useState(false);
  const [error, setError] = useState(null);
  const [toggleIcons, setToggleIcons] = useState({});
  const [mensagemFeedback, setMensagemFeedback] = useState("");
  const [selectedOportunidade, setSelectedOportunidade] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loadingFeedbacks, setLoadingFeedbacks] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const showAlert = (message) => {
    setAlertMessage(message);
    setTimeout(() => setAlertMessage(""), 5000);
  };

  const handleGenerateActionPlan = async () => {
    setLoading(true);
    setError(null);
    try {
      await apiDolar.get('/generate_action_plan');
      console.log("Plano de ação gerado com sucesso.");
      showAlert("Plano de ação gerado com sucesso.");

      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      setError("Erro ao gerar o plano de ação.");
      console.error("Erro ao gerar o plano de ação:", error);
      showAlert("Erro ao criar plano, tente novamente!");
    } finally {
      setLoading(false);
    }
  };

  const fetchRating = async (idOportunidade) => {
    try {
      const response = await api.get(`/feedbacks/rating/oportunidade/${idOportunidade}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o rating da oportunidade:", error);
      return 0;
    }
  };
  useEffect(() => {
    const userType = localStorage.ROLE;

    const fetchOportunidades = async () => {
      try {
        const response = userType === "vendedor"
          ? await api.get(`/oportunidades/porVendedor/${localStorage.NOME}`)
          : await api.get(`/oportunidades/porGerente/${localStorage.IDGERENTE}`);

        const oportunidades = response.data;
        setData(oportunidades);

        const ratingsData = {};
        for (const oportunidade of oportunidades) {
          ratingsData[oportunidade.idOportunidade] = await fetchRating(oportunidade.idOportunidade);
        }
        setRatings(ratingsData);
      } catch (error) {
        console.error("Erro ao carregar oportunidades:", error);
      }
    };

    fetchOportunidades();
  }, []);

  useEffect(() => {
    const userType = localStorage.ROLE;

    if (userType === "vendedor") {
      api
        .get(`/oportunidades/porVendedor/${localStorage.NOME}`, {})
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (userType === "gerente") {
      api
        .get(`/oportunidades/porGerente/${localStorage.IDGERENTE}`, {})
        .then((response) => {
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
    }
  };

  const handleOpenModal = (idOportunidade) => {
    setSelectedOportunidade(idOportunidade);
    setOpenModalFeedback(true);
  };

  const handleStarClick = (idOportunidade, currentRating) => {
    console.log(`Oportunidade: ${idOportunidade}, Rating clicado: ${currentRating}`);
    setRatings((prevRatings) => ({
      ...prevRatings,
      [idOportunidade]: currentRating,
    }));
  };

  const handleMouseEnter = (index, currentRating) => {
    setHoverRatings({ ...hoverRatings, [index]: currentRating });
  };

  const handleMouseLeave = (index) => {
    setHoverRatings({ ...hoverRatings, [index]: null });
  };

  const handleToggleIcon = async (index) => {
    setToggleIcons((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));

    if (!toggleIcons[index]) {
      setLoadingFeedbacks(true);
      try {
        const response = await api.get(`/feedbacks/porOportunidade/${data[index].idOportunidade}`);
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Erro ao carregar feedbacks:", error);
        setFeedbacks([]);
      } finally {
        setLoadingFeedbacks(false);
      }
    }
  };

  const handleEnviarFeedback = async (idOportunidade) => {
    const rating = ratings[idOportunidade];
    console.log(`Rating enviado: ${rating} para oportunidade ID: ${idOportunidade}`);

    const autorTipo = localStorage.ROLE;
    const fkAutor = autorTipo === "vendedor"
      ? localStorage.IDVENDEDOR
      : localStorage.IDGERENTE;

    console.log(`Autor tipo: ${autorTipo}, fkAutor: ${fkAutor}`);

    const feedback = {
      ratingFeedback: rating || 0,
      comentarioFeedback: mensagemFeedback,
      motivoFeedback: document.querySelector('input[name="motivoFeedback"]:checked')?.value,
      objetivoFeedback: document.querySelector('input[name="objetivoFeedback"]:checked')?.value,
      estrategiaFeedback: document.querySelector('input[name="estrategiaFeedback"]:checked')?.value,
      dataFeedback: new Date().toISOString(),
      autorTipo: localStorage.ROLE,
      fkAutor,
      oportunidade: { idOportunidade },
    };

    try {
      const response = await api.post("/feedbacks", feedback);

      if (response.status === 200 || response.status === 201) {

        showAlert("Feedback enviado com sucesso.");
        setOpenModalFeedback(false);

        setTimeout(() => {
          window.location.reload();
        }, 1000);

        const updatedRating = await fetchRating(idOportunidade);
        setRatings((prevRatings) => ({
          ...prevRatings,
          [idOportunidade]: updatedRating,
        }));
      } else {
        showAlert("Erro ao enviar o feedback");
      }
    } catch (error) {
      showAlert("Erro");
      console.error("Erro ao enviar feedback:", error);
    }
  };

  useEffect(() => {
    if (open) {
      setMensagemFeedback('');
      setRatings({});
      setHoverRatings({});
    }
  }, [open]);

  return (
    <div className="bg-branco-medio dark:bg-preto-claro h-screen flex flex-col text-preto dark:text-branco-claro p-8">
      <div className="mb-8 mt-28 flex justify-between">
        <div className="items-center flex">
          <SparklesIcon className="h-14 w-14 mr-4" />
          <h1 className="text-4xl ">Oportunidades</h1>
        </div>
        {localStorage.IDGERENTE && (
          <>
            <div className="flex mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleGenerateActionPlan} disabled={loading}
              >
                {loading ? 'Gerando Plano de Ação...' : 'Gerar Plano de Ação'}
              </button>
            </div>
          </>
        )}
      </div>

      {alertMessage && (
        <CustomAlert message={alertMessage} onClose={() => setAlertMessage("")} />
      )}

      <div className="w-full space-y-6">
        {data.map((item, index) => (
          <div key={index} className="bg-preto-azul p-6 rounded-lg text-left">
            <div className="bg-gray-100p-4 rounded-lg space-y-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl">
                  <strong>{item.dataHora}</strong>
                </p>
                {/* ESTRELA VISUAL */}
                <div className="flex">
                  {[...Array(5)].map((_, starIndex) => {
                    const currentRating = ratings[item.idOportunidade] || 0;
                    return (
                      <FaStar
                        key={starIndex}
                        size={25}
                        color={starIndex < currentRating ? "#2f81f7" : "#e4e5e9"}
                      />
                    );
                  })}
                </div>
              </div>
              <span className="text-4xl font-bold text-blue-500">{item.cliente}</span>
              <p className="text-xl">
                <strong>Produto: </strong> {item.produto}
              </p>
              <p className="text-xl">
                <strong>Motivo: </strong> {item.motivo}
              </p>
              <p className="text-xl">
                <strong>Objetivo: </strong> {item.objetivo}
              </p>
              <p className="text-xl">
                <strong>Estratégia: </strong>{" "}
                <span
                  className="text-xl"
                  onClick={() => handleMotivoClick(item.planoDeAcao, "Estratégia")}
                >
                  {item.planoDeAcao}
                </span>
              </p>
              <div className="flex flex-col">
                <div className="flex justify-between items-center">
                  <div onClick={() => handleToggleIcon(index)} >
                    {toggleIcons[index] ? (
                      <FaCaretUp className="cursor-pointer" size={25} />
                    ) : (
                      <FaCaretDown className="cursor-pointer" size={25} />
                    )}
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleOpenModal(item.idOportunidade)}>Avaliar oportunidade</button>
                </div>
                {toggleIcons[index] && (
                  <div className="mt-4 bg-preto-claro rounded p-4">
                    {loadingFeedbacks ? (
                      <p>Carregando feedbacks...</p>
                    ) : feedbacks.length > 0 ? (
                      feedbacks.map((feedback) => (
                        <div key={feedback.idFeedback} className="mb-1">
                          <div className="flex justify-between items-start">
                            <div className="flex gap-4 w-1/3">
                              <div className="flex items-center justify-center w-12">
                                <FaUserCircle className="w-full h-full text-gray-500" />
                              </div>
                              <div>
                                <p>
                                  <strong>Nome do funciorário: </strong> {feedback.autor.nome}
                                </p>
                                <p className="flex items-center gap-1">
                                  <strong>Avaliação da oportunidade: </strong>
                                  {/* Renderiza estrelas com base no rating */}
                                  {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar
                                      key={i}
                                      className={i < feedback.ratingFeedback ? "text-yellow-500" : "text-gray-300"}
                                    />
                                  ))}
                                </p>
                                <p>
                                  <strong>Motivo: </strong> {feedback.motivoFeedback}
                                </p>
                                <p>
                                  <strong>Objetivo: </strong> {feedback.objetivoFeedback}
                                </p>
                                <p>
                                  <strong>Estratégia: </strong> {feedback.estrategiaFeedback}
                                </p>
                              </div>
                            </div>
                            <div className="flex-grow">
                              <p className="text-justify">
                                <strong>Comentário: </strong> {feedback.comentarioFeedback}
                              </p>
                            </div>
                          </div>
                          <p className="mt-2 flex justify-end">
                            <strong>Data:  </strong>  {new Date(feedback.dataFeedback).toLocaleString()}
                          </p>
                          <hr className="mt-2 mb-5" />
                        </div>
                      ))
                    ) : (
                      <p>Sem feedbacks para esta oportunidade.</p>
                    )}
                  </div>
                )}
                <ModalFeedback open={open} onClose={() => setOpenModalFeedback(false)}>
                  <div className="text-left">
                    <div className="mx-auto my-4 w-full">
                      <h1 className="text-2xl font-black text-white">Dê um feedback para essa oportunidade!</h1>
                      <p className="text-left text-base font-bold text-white mt-6">
                        Como você avalia essa oportunidade?
                      </p>
                      {/* ESTRELA PARA FEEDBACK */}
                      <div className='flex mt-4 justify-center gap-6'>
                        {[...Array(5)].map((star, starIndex) => {
                          const currentRating = starIndex + 1;
                          return (
                            <label key={`${selectedOportunidade}-star-${currentRating}`}>
                              <input
                                type="radio"
                                className="hidden"
                                name={`rating-${selectedOportunidade}`}
                                value={currentRating}
                                onClick={() => handleStarClick(selectedOportunidade, currentRating)}
                              />
                              <FaStar
                                className='cursor-pointer'
                                size={60}
                                color={currentRating <= (hoverRatings[selectedOportunidade] || ratings[selectedOportunidade]) ? "#2f81f7" : "#e4e5e9"}
                                onMouseEnter={() => handleMouseEnter(selectedOportunidade, currentRating)}
                                onMouseLeave={() => handleMouseLeave(selectedOportunidade)}
                              />
                            </label>
                          );
                        })}
                      </div>
                      <p className="text-left text-base font-bold text-white mt-6">
                        O que achou dos principais focos criados pela inteligência?
                      </p>
                      <div className="flex gap-6">
                        <div className="text-left text-base mt-4">
                          <p className="font-medium">Motivo</p>
                          <div className="flex gap-2 mt-2 flex-col">
                            <div className="flex">
                              <input type="radio" id="motivoYes" name="motivoFeedback" value="Faz sentido" class="radio-check" />
                              <label htmlFor="motivoYes" className="font-light">Faz sentido</label>
                            </div>
                            <div className="flex">
                              <input type="radio" id="motivoNo" name="motivoFeedback" value="Não faz sentido" class="radio-check" />
                              <label htmlFor="motivoNo" className="font-light">Não faz sentido</label>
                            </div>
                          </div>
                        </div>
                        <div className="text-left text-base mt-4">
                          <p className="font-medium">Objetivo</p>
                          <div className="flex gap-2 mt-2 flex-col">
                            <div className="flex">
                              <input type="radio" id="objetivoYes" name="objetivoFeedback" value="Faz sentido" class="radio-check" />
                              <label htmlFor="objetivoYes" className="font-light">Faz sentido</label>
                            </div>
                            <div className="flex">
                              <input type="radio" id="objetivoNo" name="objetivoFeedback" value="Não faz sentido" class="radio-check" />
                              <label htmlFor="objetivoNo" className="font-light">Não faz sentido</label>
                            </div>
                          </div>
                        </div>
                        <div className="text-left text-base mt-4">
                          <p className="font-medium">Estratégia</p>
                          <div className="flex gap-2 mt-2 flex-col">
                            <div className="flex">
                              <input type="radio" id="estrategiaYes" name="estrategiaFeedback" value="Faz sentido" class="radio-check" />
                              <label htmlFor="estrategiaYes" className="font-light">Faz sentido</label>
                            </div>
                            <div className="flex">
                              <input type="radio" id="estrategiaNo" name="estrategiaFeedback" value="Não faz sentido" class="radio-check" />
                              <label htmlFor="estrategiaNo" className="font-light">Não faz sentido</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-left text-base mt-6">
                      <p className="font-medium text-white mb-1">Deixe uma mensagem ou sugestão</p>
                      <textarea
                        name="mensagemFeedback"
                        id="mensagemFeedback"
                        rows="4"
                        placeholder="Escreva aqui sua mensagem..."
                        className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        onChange={(e) => setMensagemFeedback(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mt-6">
                      <button className="bg-azul hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={() => handleEnviarFeedback(selectedOportunidade)} >Enviar</button>
                    </div>
                  </div>
                </ModalFeedback>
              </div>
            </div>
          </div>
        ))}
      </div>

      {
        openModalDesc && (
          <ModalDesc
            closeModal={setOpenModalDesc}
            descricao={modalDescDescricao}
            titulo={modalTitulo}
          />
        )
      }
    </div >
  );
}

export default Oportunidades;
