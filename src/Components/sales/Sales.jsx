import React from "react";
import "./Sales.css";
import saleImage1 from "../../assets/images/sales/sales-1.webp";
import saleImage2 from "../../assets/images/sales/sales-2.webp";
function Sales() {
  return (
    <>
      <section className="containerSales my-20 flex flex-col md:flex-row gap-6">
        <div className="card-blue">
          <div className="card-content">
            <p className="text-lg text-accent">Super Sale</p>
            <h3 className="text-3xl font-bold text-accent">New Collection</h3>
            <button className="btn-outline-accent my-5">Shop Now</button>
          </div>
          <div className="card-image">
            <img src={saleImage1} alt="sale" className="w-full" />
          </div>
        </div>
        <div className="card-yellow">
          <div className="card-content">
            <h3 className="text-3xl font-bold text-accent">New Season</h3>
            <p className="text-lg text-accent">Sale 40% Off</p>
            <button className="btn-fill-accent my-5">Shop Now</button>
          </div>
          <div className="card-image">
            <img src={saleImage2} alt="sale" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Sales;
