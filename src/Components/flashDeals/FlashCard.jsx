import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <FontAwesomeIcon
          icon={faLongArrowAltRight}
          className="fa fa-long-arrow-alt-right"
        />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <FontAwesomeIcon
          icon={faLongArrowAltLeft}
          className="fa fa-long-arrow-alt-left"
        />
      </button>
    </div>
  );
};
function FlashCard({ productItems, addToCart  }) {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems, index) => {
          return (
            <div className="box" key={index}>
              <div className="product mtop">
                <div className="img">
                  <span className="discount">{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt="" />
                  <div className="product-like">
                    <label>{count}</label> <br />
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={increment}
                      className="fa-regular fa-heart"
                    />
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <FontAwesomeIcon icon={faStar} className="fa fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa fa-star" />
                  </div>
                  <div className="price">
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3*/}
                    <button onClick={() => addToCart(productItems)}>
                      <FontAwesomeIcon icon={faPlus} className="fa fa-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default FlashCard;
