import React, { FC } from "react";
import Slider from "react-slick";

import Card from "../../organisms/Card/Card";
import Title from "../../organisms/Title/Title";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Courses.scss";

import { CoursesType } from "./Types";
import ArrowLeft from "../../atoms/arrowLeft" 
import ArrowRight from "../../atoms/arrowRight" 

const Courses: FC<CoursesType> = ({ data }) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    prevArrow: <div className="arrow-left"><ArrowLeft/></div>,
    nextArrow: <div className="arrow-left"><ArrowRight/></div>,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };
  return (
    <section id="courses">
      <div className="courses__content">
        <Title info={data.title} tag="h2" />
        <Slider className="courses__list" {...settings}>
          {data.cards &&
            data.cards.map((card) => (
              <Card
                key={card.title}
                info={card}
                classItem={"courses__list--item"}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Courses;
