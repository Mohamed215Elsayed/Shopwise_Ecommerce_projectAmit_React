import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

function FlashDeals({ productItems,addToCart }) {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading"
          style={{justifyContent:"center",alignItems:"center",display:"inline-flex",textAlign:"center"}}
          >
            <FontAwesomeIcon icon={faBolt} className="iconflah" />
            <h1>Exclusive Products</h1>
          </div>
          <FlashCard  productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
    </>
  );
}

export default FlashDeals;
