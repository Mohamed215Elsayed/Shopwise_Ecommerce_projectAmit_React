import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarFilled, faCartPlus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartFilled, faHeart as faHeartOutlined, faStarHalf, faStar } from '@fortawesome/free-regular-svg-icons';
import "./ProductCard.css";
export const ProductCard = ({ product, openProductDetails, toggleFavorite, addToCart, ratingStars }) => {

// const CardComponent = ({ product }) => {
//   const [priceOff, setPriceOff] = useState(0);
//   const [ratingStars, setRatingStars] = useState({ filled: 0, half: 0, empty: 0 });
//   // const cartService = new CartService(); 

//   const calculateRatingStars = () => {
//     const filled = Math.floor(product.rating);
//     const half = product.rating % 1 > 0 ? 1 : 0;
//     const empty = 5 - filled - half;
//     setRatingStars({ filled, half, empty });
//   };
//   const [inMyFavorites, setInMyFavorites] = useState(false);
//   const toggleFavorite = () => {
//     setInMyFavorites(!inMyFavorites);
//   };

//   const openProductDetails = () => {
//     console.log('open product details');
//   };

//   const addToCart = () => {
//     const cartProduct = {
//       productId: product.id,
//       name: product.title,
//       price: product.price,
//       img: product.thumbnail,
//       quantity: 1,
//       stock: product.stock,
//     };
//     cartService.addToCart(cartProduct);
//   };
  return (
    <div className="card flex h-full min-h-[360px] w-full max-w-[250px] flex-col rounded-lg border border-gray-300">
      <div className="max-h-60 relative flex flex-1 items-center overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={product.image}
          alt=""
        />

        <div className="action-btns">
          <button onClick={openProductDetails}>
            <i className="fa fa-search"></i>
          </button>
          <button className="favorite-btn delay-75" onClick={toggleFavorite}>
            {product && <i className="fa fa-heart"></i>}
          </button>
        </div>
      </div>
      <div className="card-content p-4 text-center">
        <a
          href={`/product/${product.id}`}
          className="mb-3 block text-lg font-bold text-accent transition-colors hover:text-primary focus:text-primary outline-none"
        >
          {product.title}
        </a>
        <div className="card-footer relative flex flex-col gap-3">
          <div className="flex justify-center gap-2 text-lg flex-wrap">
            <span className="font-bold text-primary">${product.price}</span>
            {product.discountPercentage && (
              <>
                <span className="text-gray-500">
                  ${product.price * product.discountPercentage}
                </span>
                <span className="text-green-600">
                  {product.discountPercentage}% off
                </span>
              </>
            )}
          </div>
          <div className="flex justify-center gap-4">
            <div className="flex text-yellow-500">
              {/* Render stars */}
            </div>
            {/* <span className="text-gray-500">({product.stock})</span> */}
          </div>
          <div className="add-to-cart absolute top-0 left-0 right-0 bottom-0 bg-white">
            <button
              className="btn-fill-primary flex items-center justify-center gap-2"
              // onClick={addToCart}
            >
              <i className="fa fa-cart-plus"></i>
              <span>Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;