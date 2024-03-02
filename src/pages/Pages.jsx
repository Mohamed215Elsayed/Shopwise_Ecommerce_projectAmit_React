import React from "react";
import Home from "../Components/Main/Home";
import FlashDeals from "../Components/flashDeals/FlashDeals";
import TopCate from "../Components/top/TopCate";
import Preview from "../Components/Preview/Preview";
import Brands from "../Components/Brands/Brands";
import Benefits from "../Components/Benefits/Benefits";
import Sales from "../Components/sales/Sales";
// import TrendingItems from '../Components/TrendingItems/TrendingItems';
import Footer1 from "../Components/Footer/Footer1";
function Pages({ productItems, addToCart, CartItem }) {
  //, shopItems
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <Benefits />
      <TopCate />
      {/* <TrendingItems /> */}
      <Preview />
      <Sales />
      <Brands />
      <Footer1 />
    </div>
  );
}

export default Pages;
