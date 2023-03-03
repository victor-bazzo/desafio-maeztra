import { useState } from "react";
import "./index.scss";
import Modal from "react-modal";
import modalImg from "./modalimg.jpg"


Modal.setAppElement("#root")

function ModalNews() {

    const [modalIsOpen, setIsOpen] = useState(true);

    function closeModal () {
        setIsOpen(false)
    }

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="modal" id="modal">
                <div className="modal-container">
                    <div className="modal-img">
                        <img src={modalImg} alt="Imagem do Modal" />
                    </div>
                    <div className="modal-content">
                        <div className="modal-icon">
                            <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.66659 1.14331H22.3333C23.6166 1.14331 24.6666 2.25558 24.6666 3.61501V18.4452C24.6666 19.8047 23.6166 20.9169 22.3333 20.9169H3.66659C2.38325 20.9169 1.33325 19.8047 1.33325 18.4452V3.61501C1.33325 2.25558 2.38325 1.14331 3.66659 1.14331Z" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.6666 3.61499L12.9999 12.266L1.33325 3.61499" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="modal-title">
                            Bem Vindo à MAEZTRA
                        </div>

                        <div className="modal-text">
                            Receba em Primeira mão <br/>
                            <strong>desconto e ofertas exclusivas</strong>
                        </div>

                        <input placeholder="Digite seu e-mail" className="modal-input"/>
                        <button className="modal-button">
                            Enviar
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3125 0.64064C11.5703 0.500015 11.8516 0.476578 12.1328 0.54689C12.4141 0.617203 12.625 0.757828 12.7891 0.992203C12.9531 1.22658 13.0234 1.50783 12.9766 1.78908L11.5938 10.8828C11.5234 11.2578 11.3359 11.5156 11.0312 11.6797C10.8438 11.7735 10.6797 11.8203 10.4922 11.8203C10.3281 11.8203 10.1875 11.7969 10.0469 11.75L7.42188 10.6485L6.41406 12.0547C6.17969 12.336 5.92188 12.4766 5.59375 12.5C5.26562 12.5235 4.98438 12.4297 4.75 12.2188C4.49219 12.0078 4.375 11.7266 4.375 11.375V9.40627L1.70312 8.28127C1.42188 8.18752 1.21094 8.00002 1.09375 7.71877C0.976562 7.46095 0.953125 7.20314 1.04688 6.92189C1.11719 6.64064 1.28125 6.4297 1.5625 6.26564L11.3125 0.64064ZM5.5 11.375L6.36719 10.2031L5.5 9.85158V11.375ZM10.4922 10.6953L11.875 1.62502L2.125 7.25002L4.65625 8.3047L9.60156 3.96877C9.69531 3.87502 9.8125 3.85158 9.95312 3.89845C10.0703 3.94533 10.1641 4.01564 10.2109 4.13283C10.2578 4.25002 10.2344 4.3672 10.1641 4.46095L6.88281 9.21877L10.4922 10.6953Z"/>
                            </svg>
                        </button>

                        <button onClick={closeModal} className="modal-close">
                            FECHAR
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ModalNews;
