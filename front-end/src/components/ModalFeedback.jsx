import { FaWindowClose } from "react-icons/fa";

export default function ModalFeedback({ open, onClose, children }) {
    return (
        <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/10" : "invisible"}`}>
            <div onClick={(e) => e.stopPropagation()}
                className={`bg-preto-azul rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                    <button onClick={onClose} className="absolute top-2 right-2 p-1 rounded-lg text-azul hover:text-white">
                        <FaWindowClose/>
                    </button>
                {children}
            </div>
        </div>
    )
}