import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Preview.css";
import imgList from "./Dataprev";
function Preview() {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    infinite: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="preview-section" className="relative my-20 ">
        <Slider {...settings}>
          {imgList.map((img, index) => (
            <div key={index} className="image h-full w-full">
              <img
                src={img.cover}
                alt={`preview-${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-1/2 left-1/2 z-10 bg-opacity-90 flex h-28 w-[90vw] -translate-y-1/2 -translate-x-1/2 flex-col items-center justify-center rounded-full bg-white text-center lg:w-96">
          <p className="text-xl font-bold text-accent">Instagram</p>
          <p className="text-accent">@shoppingzone</p>
        </div>
      </section>
    </>
  );
}

export default Preview;
