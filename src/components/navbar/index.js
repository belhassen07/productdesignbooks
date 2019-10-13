import React from "react";
import Logo from "../../assets/logo.png";
import {Link} from "react-router-dom";
import "./navbar.css";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <img src={Logo} alt="12 product design books challenge logo"/>
      </Link>
    </nav>
  );
}
export default Nav;
