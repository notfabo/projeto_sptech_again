import React from 'react'

function ModalDesc({ closeModal, descricao, titulo }) {
    return (
        (
          <div
            onClick={() => {
              closeModal(false);
            }}
            className="absolute w-full h-full bg-preto top-0 right-0 bg-preto-trans flex justify-center items-center"
          >
            <div className="max-w-2xl bg-preto-azul rounded-2xl flex p-4 items-start flex-col gap-y-4">
              <p className="font-bold text-2xl ">{titulo}</p>
              <p className="self-start break-words whitespace-pre-wrap text-left">{descricao}</p>
            </div>
          </div>
        )
      );
}

export default ModalDesc
