import React from "react";
import "./Footer1.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import img1 from "./Visas/discover.png";
import img2 from "./Visas/master_card.png";
import img3 from "./Visas/visa.png";
import img4 from "./Visas/amarican_express.png";
import img5 from "./Visas/paypal.png";
import imgLogo from "./logo_dark.png";
function Footer1() {
  return (
    <>
      <footer className="bg-accent">
        <div className="container py-20">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <h3 className="text-center text-lg font-bold text-white md:text-left">
                Contact Info
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <span className="flex items-start justify-center gap-4 text-center text-white md:justify-start md:text-left">
                    <FontAwesomeIcon icon={faLocation} />
                    <span>123 Street, Old Trafford, NewYork, USA</span>
                  </span>
                </li>
                <li>
                  <a
                    href="/mailto:info@shopwise.com"
                    target="_blank"
                    className="link flex items-start justify-center gap-4 md:justify-start"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>M_info@shopwise.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1-234-567-890"
                    target="_blank"
                    className="link flex items-start justify-center gap-4 md:justify-start"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+1 234 567 890</span>
                  </a>
                </li>
              </ul>

              <ul className="flex justify-center gap-4 md:justify-start">
                <li>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferrer"
                    className="social-link"
                  >
                    <FontAwesomeIcon icon={faGooglePlus} />
                  </a>
                </li>
                <li>
                  <a href="/#" target="_blank" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="/#" target="_blank" className="social-link ">
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-5">
              <h3 className="text-center text-lg font-bold text-white md:text-left">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-4 text-center md:text-left">
                <li>
                  <a href="/#" className="link text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="link text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/#" className="link text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/#" className="link text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/#" className="link text-white">
                    Help
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold text-center md:text-left text-white">
                Newsletter
              </h3>
              <p className="text-white text-center md:text-left">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
              <form className="flex flex-col gap-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full rounded-full p-4 pr-20 outline-1 outline-offset-2 outline-white focus:outline"
                    placeholder="Enter your email address"
                  />
                  <button className="absolute right-1 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-primary p-2 text-lg text-white">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} />
                  </button>
                  
                </div>
                {/* <img src={imgLogo} alt="discover" className=" logofooter" /> */}
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white bg-opacity-20"></div>
        <div className="footerhandle px-10">
        <div className="container py-8 ">
          <p className=" text-white">
            &copy; 2024 All Rights Reserved by Bestwebcreator Mohammad ElSaid.
          </p>
        </div>
        <div className="images">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
        </div>
        </div>
      </footer>
    </>
  );
}

export default Footer1;
