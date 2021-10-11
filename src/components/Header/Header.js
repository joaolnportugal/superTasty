import React from "react";
import "./Header.css";
import { SearchOutlined, ShoppingCart } from "@material-ui/icons";

function header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        alt=""
        src="https://static.eattasty.com/cloudinary/eattasty/image/upload/q_auto/v1530117907/EatTasty-Logo_Bg_ejdecz.png"
      />
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

      <div className="header_optionCart">
        <ShoppingCart />
        <span className="header_optionText header_cartCount ">0</span>
      </div>
    </div>
  );
}

export default header;
