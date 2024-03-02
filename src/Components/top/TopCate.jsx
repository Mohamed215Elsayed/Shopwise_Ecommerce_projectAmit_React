import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import TopCart from "./TopCart";

function TopCate() {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <FontAwesomeIcon
                icon={faBorderAll}
                className="iconL fa-solid fa-border-all"
              />
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <FontAwesomeIcon
                icon={faCaretRight}
                className="iconR fa-solid fa-caret-right"
              />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
}

export default TopCate;
