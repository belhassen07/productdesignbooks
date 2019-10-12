import React from "react";
import "./header.css";
import CalendarImage from "../../assets/headerImg.png";

function Header() {
  return <header>
      <div className="Header-content">
          <h6> #12ProductDesignBookChallenge </h6>
          <h1>Unlock your product design potential with our <span>1 Book / Month</span> recommendation list</h1>
          <p>Handpicked product design books. <br/> Read one every month for a year !</p>
      </div>
      <img src={CalendarImage} alt="Calendar containing 12 months, each month represent a challenge to read a book"/>
  </header>;
}
export default Header;