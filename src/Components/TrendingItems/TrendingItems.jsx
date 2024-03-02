import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TrendingItems.css'; 

function TrendingItems() {

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="trending-products-swiper" className="container">
      <div className="relative">
        <h2 className="section-title">Trending Items</h2>

        {/* <Slider {...slickSettings} className="my-10">
          {products.map((product, index) => (
            <div key={index} className="slick-slide">
              <ProductCard product={product} />
            </div>
          ))}
        </Slider> */}
      </div>
    </section>
  );
}

export default TrendingItems;