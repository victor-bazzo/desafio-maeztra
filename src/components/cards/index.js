import React from "react";
import Slider from "react-slick";
import shelf1 from "./shelf1.png";
import shelf2 from "./shelf2.png";
import "./index.scss";
import ArrowLeft from "./arrowleft.png";
import ArrowRight from "./arrowright.png"; 

function Cards() {
  const slickShelf = {
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: (
      <div className="arrow-left">
        <img src={ArrowLeft} alt="Left Arrow" />
      </div>
    ),
    nextArrow: (
      <div className="arrow-left">
        <img src={ArrowRight} alt="Right Arrow" />
      </div>
    ),
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "0px",
          dots: false,
        },
      },
    ],
  };

  const handleClick = () => {};

  return (
    <div className="shelf-container">
      <h1>As Mais Pedidas</h1>
      <div className="shelf-content">
        <Slider {...slickShelf}>
          <div className="shelf-item shelf1">
            <div className="shelf-img">
              <img src={shelf1} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-one">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$500</span>
            </div>
            <a href="!#" className="shelf-name">
              Faux Suede Mini Skirt
            </a>
            <div className="shelf-description">
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
          <div className="shelf-item shelf2">
            <div className="shelf-img">
              <img src={shelf2} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-two">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$320,00</span>
            </div>
            <a href="!#" className="shelf-name">Ruched Rose Print Mini Skirt</a>
            <div className="shelf-description">
              A satin mini skirt featuring an allover floral print, ruched side
              with self-tie closure, concealed back zipper, and a flounce hem.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
          <div className="shelf-item shelf1">
            <div className="shelf-img">
              <img src={shelf1} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-one">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$500</span>
            </div>
            <a href="!#" className="shelf-name">Faux Suede Mini Skirt</a>
            <div className="shelf-description">
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
          <div className="shelf-item shelf2">
            <div className="shelf-img">
              <img src={shelf2} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-two">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$320,00</span>
            </div>
            <a href="!#" className="shelf-name">Ruched Rose Print Mini Skirt</a>
            <div className="shelf-description">
              A satin mini skirt featuring an allover floral print, ruched side
              with self-tie closure, concealed back zipper, and a flounce hem.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
          <div className="shelf-item shelf1">
            <div className="shelf-img">
              <img src={shelf1} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-one">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$500</span>
            </div>
            <a href="!#" className="shelf-name">
              Faux Suede Mini Skirt
            </a>
            <div className="shelf-description">
              A faux suede mini skirt featuring exposed button-front closures
              and panel seam construction.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
          <div className="shelf-item shelf2">
            <div className="shelf-img">
              <img src={shelf2} alt="Shelf Img" />
            </div>
            <div className="shelf-variation shelf-two">
              <div onClick={handleClick} className="box-variation first"></div>
              <div onClick={handleClick} className="box-variation second"></div>
              <div onClick={handleClick} className="box-variation third"></div>
              <div onClick={handleClick} className="box-variation four"></div>
            </div>
            <div className="shelf-price">
              <span>R$320,00</span>
            </div>
            <a href="!#" className="shelf-name">Ruched Rose Print Mini Skirt</a>
            <div className="shelf-description">
              A satin mini skirt featuring an allover floral print, ruched side
              with self-tie closure, concealed back zipper, and a flounce hem.
            </div>
            <button className="shelf-button">Adicionar</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Cards;
