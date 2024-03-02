import React from 'react';
import "./Benefits.css";
import img4 from "../../assets/icons/noun-payment-security-4475783.svg";
import img1 from "../../assets/icons/noun-free-delivery-4739681.svg";
import img2 from "../../assets/icons/noun-money-return-4958708.svg";
import img3 from "../../assets/icons/noun-customer-service-21270.svg";
const Benefits = () => {

  return (
    <>
    <section className="container my-20 backgroundprev">
      <div className="cards">
        <div className="card">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div>
            <p className="title">Free Delivery</p>
            <p className="description">Worldwide</p>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div>
            <p className="title">Money Return</p>
            <p className="description">30 days money return</p>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div>
            <p className="title">24/7 Support</p>
            <p className="description">Online Support</p>
          </div>
        </div>

        <div className="card">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div>
            <p className="title">Secure Payment</p>
            <p className="description">100% Secure</p>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};
export default Benefits;
