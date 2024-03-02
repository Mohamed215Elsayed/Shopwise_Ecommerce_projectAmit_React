import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
const Head = () => {
  //handle country in selector
  const [selectedCountry, setSelectedCountry] = useState("ph");
  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
  };
  //handle languageCode in selector
  const [selectedLanguage, setSelectedLanguage] = useState("USD");
  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div
            className="left row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <select
              name="countries"
              className="custome_select cursor-pointer me-2 bg-white text-black rounded-md p-1  border-none outline-none"
              style={{ width: "auto", height: "auto"}}
              value={selectedCountry}
              onChange={(e) => handleCountrySelect(e.target.value)}
            >
              <option value="ph">Phalstine</option>
              <option value="fr">France</option>
              <option value="eg">Egypt</option>
            </select>
            <select
              name="languages"
              className="custome_select cursor-pointer me-2 bg-white text-black rounded-md p-1 border-none outline-none"
              style={{ width: "auto", height: "auto"}}
              value={selectedLanguage}
              onChange={(e) => handleLanguageSelect(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBR">GBR</option>
            </select>

            <span className=" " style={{ display: "inline-flex", alignItems: "center",justifyContent:"center" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 me-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <span >123-456-7890</span>
            </span>
          </div>
          <div className="right row RText" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <div className="flex items-center me-2 font-inter">
            <FontAwesomeIcon icon={faShuffle} className="custom-icon" />
            <span className="cursor-pointer">Compare</span>
          </div>
          <div className="flex items-center me-2 font-inter">
            <FontAwesomeIcon icon={faHeart} className="custom-icon" />
            <span className="cursor-pointer">Wishlist</span>
          </div>
          <div className="flex items-center me-2 font-inter ">
            <FontAwesomeIcon icon={faUserCheck} className="custom-icon" />
            <span className=" cursor-pointer">Login</span>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Head;
