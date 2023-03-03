import React from "react";
import Slider from "react-slick";
import "./index.scss";
import ruler1 from './ruler1.png'
import ruler2 from './ruler2.png'
import ruler3 from './ruler3.png'
import ruler4 from './ruler4.png'
import ruler5 from "./ruler5.png";

function Ruler() {

  const mobileMz = window.innerWidth < 768;

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "20px",
    centerMode: true
  };

  return (
    
      <div className="ruler">
        <h1 className="ruler-title">Por que comprar na Maeztra?</h1>
        <ul className="ruler-container">

        {mobileMz ? (
            <Slider {... settings}>
              <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler1} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Produtos importados</h3>
                <p className="ruler-text">Produto de Alta Qualidade</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler2} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Estoque no Brazil</h3>
                <p className="ruler-text">Produtos mais perto de você!</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler3} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Trocas Garantidas</h3>
                <p className="ruler-text">Trocas em até 48 horas, vejas as regras</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler4} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Ganhe 5% off</h3>
                <p className="ruler-text">Pagando à vista no Cartão</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler5} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Frete Grátis</h3>
                <p className="ruler-text">Em compras acima de R$ 499,00</p>
              </div>
            </li>
            </Slider>
          ) : (
            <ul className="ruler-container">
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler1} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Produtos importados</h3>
                <p className="ruler-text">Produto de Alta Qualidade</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler2} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Estoque no Brazil</h3>
                <p className="ruler-text">Produtos mais perto de você!</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler3} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Trocas Garantidas</h3>
                <p className="ruler-text">Trocas em até 48 horas, vejas as regras</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler4} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Ganhe 5% off</h3>
                <p className="ruler-text">Pagando à vista no Cartão</p>
              </div>
            </li>
            <li className="ruler-content">
              <div className="ruler-img">
                <img src={ruler5} alt="Ruler Img" />
              </div>
              <div className="ruler-benefits">
                <h3 className="ruler-subtitle">Frete Grátis</h3>
                <p className="ruler-text">Em compras acima de R$ 499,00</p>
              </div>
            </li>
          </ul>
        )}
        </ul>
      </div>
  );
}

export default Ruler;
