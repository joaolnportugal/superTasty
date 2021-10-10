import React from "react";
import "./Header.css";

function header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://static.eattasty.com/cloudinary/eattasty/image/upload/q_auto/v1530117907/EatTasty-Logo_Bg_ejdecz.png"
      />
      <div className="header-searchBar">
        <input className="header_searchInput" type="text" />
        {/*logo*/}
      </div>

      <div className="header_options">
        <div className="header_signInOption">
          <span className="signIn">Sign In</span>
        </div>

        <div className="header_creatAccountOption">
          <span className="createAccount">Create Account</span>
        </div>

        <div className="header__option"></div>
      </div>
    </div>
  );
}

export default header;
