import React from "react";
import "./index.scss";

function Ruler() {
  return (
    <div className="ruler">
      <h1 className="ruler-title">Por que comprar na Maeztra?</h1>
      <ul className="ruler-container">
        <li className="ruler-content">
          <h3 className="ruler-subtitle">Produtos importados</h3>
          <p className="ruler-text">Produto de Alta Qualidade</p>
        </li>
        <li className="ruler-content">
          <h3 className="ruler-subtitle">Estoque no Brazil</h3>
          <p className="ruler-text">Produtos mais perto de você!</p>
        </li>
        <li className="ruler-content">
          <h3 className="ruler-subtitle">Trocas Garantidas</h3>
          <p className="ruler-text">Trocas em até 48 horas, vejas as regras</p>
        </li>
        <li className="ruler-content">
          <h3 className="ruler-subtitle">Ganhe 5% off</h3>
          <p className="ruler-text">Pagando à vista no Cartão</p>
        </li>
        <li className="ruler-content">
          <h3 className="ruler-subtitle">Frete Grátis</h3>
          <p className="ruler-text">Em compras acima de R$ 499,00</p>
        </li>
      </ul>
    </div>
  );
}

export default Ruler;
