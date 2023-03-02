import React from "react";
import fullbanner from "./fullbanner.png";
import fullbannermobile from "./fullbannermobile.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import ArrowLeft from "./arrowleft.png";
import ArrowRight from "./arrowright.png"; 

function FullBanners() {
  const mobileMz = window.innerWidth < 768;


  const slick = {
    dots: true,
    infinite: true,
    speed: 500,
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="fullbanner">
      {mobileMz ? (
        <Slider {...slick}>
          <img src={fullbannermobile} alt="banner" />
          <img src={fullbannermobile} alt="banner" />
          <img src={fullbannermobile} alt="banner" />
          <img src={fullbannermobile} alt="banner" />
          <img src={fullbannermobile} alt="banner" />
        </Slider>
      ) : (
        <div className="fullbanner desktop">
          <Slider {...slick}>
            <img src={fullbanner} alt="banner" />
            <img src={fullbanner} alt="banner" />
            <img src={fullbanner} alt="banner" />
            <img src={fullbanner} alt="banner" />
            <img src={fullbanner} alt="banner" />
          </Slider>
        </div>
      )}
    </div>
  );
}

export default FullBanners;