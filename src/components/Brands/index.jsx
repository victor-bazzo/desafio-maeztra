import React from "react";
import Slider from "react-slick";
import "./index.scss";
import brands1 from "./brands1.png";
import brands2 from "./brands2.png";
import brands3 from "./brands3.png";
import brands4 from "./brands4.png";
import brands5 from "./brands5.png";

function Brands() {
  const mobileMz = window.innerWidth < 768;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <div className="brands">
      <h1 className="brands-title">Por que comprar na Maeztra?</h1>
      <ul className="brands-container">
        {mobileMz ? (
          <Slider {...settings}>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands1} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands2} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands3} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands4} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands5} alt="brands Img" />
              </div>
            </li>
          </Slider>
        ) : (
          <ul className="brands-container">
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands1} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands2} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands3} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands4} alt="brands Img" />
              </div>
            </li>
            <li className="brands-content">
              <div className="brands-img">
                <img src={brands5} alt="brands Img" />
              </div>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Brands;
