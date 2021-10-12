import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutFood.css";

function CheckoutFood({ id, title, price, rating, image }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART" });
  };

  return (
    <div className="checkoutFood">
      <img className="checkoutFoodImage" src={image} />

      <div className="checkoutFoodInfo">
        <p className="checkoutFoodTitle">{title}</p>
        <p className="checkoutFoodPrice">
          <small>€</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="checkoutFoodRating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>{rating}⭐</p>
          ))}
      </div>
      <button onClick={removeFromCart}>Remove From Cart</button>
    </div>
  );
}

export default CheckoutFood;
