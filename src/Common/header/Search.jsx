import React from "react";
import logo from "../../assets/images/logo_dark.png";
// import logo from "../../assets/shopwise-logo.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Search = ({ isLoggedIn=false, cartProducts, logoutUser =true, CartItem }) => {//{ CartItem }
  // fixed Header
  window.addEventListener("scroll", () => {
    const search = document.querySelector(".search");
    // console.log(window.scrollY)
    const El_ScrollY = window.scrollY > 100;
    search.classList.toggle("active", El_ScrollY);
  });
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
          <img src={logo} alt="logo_dark_Shopwise" />
          {/* <div className=""> */}
            {/* <span className="logo display-block"> */}
            {/* <img src={logo} alt="logo_dark_Shopwise" />
            <span>Shopwise</span>
            </span> */}
          </div>

          <div className="search-box f_flex">
            <FontAwesomeIcon
              icon={faSearch}
              className="search_mgn fa fa-search"
            />
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            {/* <NavLink to="/login">
              <FontAwesomeIcon icon={faUser} className="XCart icon-circle " />{" "}
            </NavLink> */}
            {isLoggedIn ? (
            <button onClick={logoutUser} className="link">
            <FontAwesomeIcon icon={faRightFromBracket} className="XCart icon-circle " />
    
              <span className="hidden md:inline">Logout</span>
            </button>
          ) : (
            <NavLink to="/login" className="link">
              <FontAwesomeIcon icon={faUser}  className="XCart icon-circle " />
              <span className="hidden md:inline">Login</span>
            </NavLink>
          )}


            <div className="cart">
              <NavLink to="/cart">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="XCart icon-circle"
                />
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Search;



