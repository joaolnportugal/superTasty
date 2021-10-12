import React from "react";
import "./Header.css";
import { SearchOutlined, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../stateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt=""
          src="https://dl.dropboxusercontent.com/s/4snbyg1ko6jm5hr/super%20tasty%20yellow%20logo.jpg?dl=0"
        />
      </Link>

      <div className="header-searchBar">
        <input className="header_searchInput" type="text" />
        <SearchOutlined className="header_searchIcon" />
      </div>

      <div className="header_navi">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionText">Sign In</span>
          </div>

          <div className="header_option">
            <span className="header_optionText">Create Account</span>
          </div>
        </Link>
      </div>

      <Link to="/checkout">
        <div className="header_optionCart">
          <ShoppingCart />
          <span className="header_optionText header_cartCount ">
            {cart.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
