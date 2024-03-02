import React from "react";
import Sdata from "./Sdata";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function SlideCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {Sdata.map((item, index) => {
          return (
            <div className="box d_flex top" key={index}>
              <div className="left">
              <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button className="btn-primary">SHOP NOW</button>
              </div>
              <div className="right ">
                <img src={item.cover} alt="" />
              </div>
            </div>
          );
        })}
      </Slider>
    </>
      
  );
}

export default SlideCard;
