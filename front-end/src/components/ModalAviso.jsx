import React from "react";

function ModalAviso({ closeModal, tempo, titulo, descricao }) {
  return (
    setTimeout(() => {
      closeModal?.(false);
    }, tempo),
    (
      <div
        onClick={() => {
          closeModal(false);
        }}
        className="absolute w-full h-full bg-preto top-0 right-0 bg-preto-trans flex justify-center items-center"
      >
        <div className="w-2/6 h-52 bg-preto-azul rounded-2xl flex justify-center items-center flex-col gap-y-4">
          <p className="font-bold text-3xl ">{titulo}</p>
          <p>{descricao}</p>
        </div>
      </div>
    )
  );
}

export default ModalAviso;
