import React from "react";
import "./Header.css";
import { SearchOutlined, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ cart }, dispatch] = useStateValue(); 
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          alt=""
          src="https://static.eattasty.com/cloudinary/eattasty/image/upload/q_auto/v1530117907/EatTasty-Logo_Bg_ejdecz.png"
        />
      </Link>

      <div className="header-searchBar">
        <input className="header_searchInput" type="text" />
        <SearchOutlined className="header_searchIcon" />
      </div>

      <div className="header_navi">
        <div className="header_option">
          <span className="header_optionText">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionText">Create Account</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionCart">
          <ShoppingCart />
          <span className="header_optionText header_cartCount ">{cart.length}</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
