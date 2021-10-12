import "./Checkout.css";
import React from "react";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLeftSide">
        <img
          className="checkoutAdd"
          src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://elgranagave.com/wp-content/uploads/2020/12/deliverygran-agave.gif"
          alt=""
        />
        <div>
          <h2 className="checkoutTitle">Your shopping cart</h2>
        </div>
      </div>
      <div className="checkoutRightSide">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
