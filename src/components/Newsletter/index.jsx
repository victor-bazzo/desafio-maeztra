import React from "react";
import "./index.scss";


function Newsletter() {
  //   const mobileMz = window.innerWidth < 768;

  return (
    <div className="newsletter">
        <div className="newsletter-container">
            <h1 className="newsletter-title">
                Recebe Nossa Newsletter
            </h1>
            <div className="newsletter-form">
                <input placeholder="Digite seu e-mail" className="newsletter-input" />
                <button className="newsletter-button">
                    Enviar
                </button>
            </div>
        </div>
    </div>
  );
}

export default Newsletter;
