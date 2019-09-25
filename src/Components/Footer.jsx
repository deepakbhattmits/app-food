import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <header>
      <div className="ui secondary menu">
        <Link className="item" to="/home">
          Home
        </Link>
        <Link className="item" to="/list">
          Category
        </Link>
        <div className="right menu">
          <Link className="ui item" to="/fav">
            Favourite
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Footer;
