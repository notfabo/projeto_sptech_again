import React, { useState } from 'react';
import ModalDesc from './ModalDesc';
import { FaStar, FaFileDownload } from 'react-icons/fa';
import "../index.css";

function PerfilPlanosTabela({ data }) {
  const [openModalDesc, setOpenModalDesc] = useState(false);
  const [modalTitulo, setModalTitulo] = useState("");
  const [modalDescDescricao, setModalDescDescricao] = useState("");
  const [ratings, setRatings] = useState({});
  const [hoverRatings, setHoverRatings] = useState({});

  const handleMotivoClick = (value, titulo) => {
    if (value.length > 10) {
      setModalDescDescricao(value);
      setModalTitulo(titulo);
      setOpenModalDesc(true);
      console.log(value);
    }
  };

  const handleRatingClick = async (index, currentRating, idOportunidade) => {
    setRatings({ ...ratings, [index]: currentRating });

    try {
      const response = await fetch(`http://localhost:8080/oportunidades/${idOportunidade}/rating`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ rating: currentRating })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar rating');
      }

      console.log('Rating atualizado com sucesso');
    } catch (error) {
      console.error('Erro ao atualizar rating:', error);
    }
  };

  const handleMouseEnter = (index, currentRating) => {
    setHoverRatings({ ...hoverRatings, [index]: currentRating });
  };

  const handleMouseLeave = (index) => {
    setHoverRatings({ ...hoverRatings, [index]: null });
  };

  return (
    <div className="bg-branco-medio dark:bg-preto-claro text-preto dark:text-branco-claro p-4 space-y-4">
      {data.map((item, index) => (
        <div key={index} className="bg-branco dark:bg-preto shadow-md p-6 rounded-lg text-left">
          <div className='flex justify-between items-center mb-10'>
            <h2 className="text-xl font-bold">{item.dataHora}</h2>
            <div className='flex'>
              {[...Array(5)].map((star, starIndex) => {
                const currentRating = starIndex + 1;
                return (
                  <label key={starIndex}>
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      value={currentRating}
                      onClick={() => handleRatingClick(index, currentRating, item.idOportunidade)}
                    />
                    <FaStar
                      className='star'
                      size={25}
                      color={currentRating <= (hoverRatings[index] || ratings[index]) ? "#2f81f7" : "#e4e5e9"}
                      onMouseEnter={() => handleMouseEnter(index, currentRating)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='pr-5'>
              <p className="mb-2"><strong>Produto:</strong> <span className="cursor-pointer hover:text-azul" onClick={() => handleMotivoClick(item.produto, "Produto")}>{item.produto}</span></p>
              <p className="mb-2"><strong>Motivo:</strong> <span className="cursor-pointer hover:text-azul" onClick={() => handleMotivoClick(item.motivo, "Motivo")}>{item.motivo}</span></p>
              <p className="mb-2"><strong>Objetivo:</strong> <span className="cursor-pointer hover:text-azul" onClick={() => handleMotivoClick(item.objetivo, "Objetivo")}>{item.objetivo}</span></p>
              <p className="mb-2"><strong>Estratégia:</strong> <span className="cursor-pointer hover:text-azul" onClick={() => handleMotivoClick(item.planoDeAcao, "Estratégia:")}>{item.planoDeAcao}</span></p>
            </div>
            <div className='flex flex-col justify-end'>
              <FaFileDownload size={20} className="cursor-pointer hover:text-azul transition-colors duration-100" />
            </div>
          </div>
        </div>
      ))}

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

export default PerfilPlanosTabela;
