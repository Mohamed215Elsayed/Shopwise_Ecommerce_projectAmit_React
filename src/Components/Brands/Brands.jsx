import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import brands from "./DataBrand";
import "./Brand.css";
function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 5000,
        },
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesPerView: 4,
              spaceBetween: 30,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          },
          {
            breakpoint: 320,
            settings: {
              slidesPerView: 2,
              spaceBetween: 30,
            }
          }
        ]
      };
  return (
    <>
      <section id="brands-section" className=" my-20  ">
      <h1>Our Brands</h1>
      <Slider {...settings}>
      {brands.map((brand, index) => (
        <div key={index} className="image">
          <img src={brand.cover} alt={`brand-${index + 1}`} />
        </div>
      ))}
    </Slider>
    </section>
    </>
  );
}

export default Brands;
