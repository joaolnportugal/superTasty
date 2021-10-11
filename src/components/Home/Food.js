import React from "react";
import "./Food.css";

function Food({ title, image, price, rating }) {
  return (
    <div className="food">
      <div className="foodInfo">
        <p>{title}</p>
        <p className="foodPrice">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="foodRating">
          <p> {rating}⭐ </p>
        </div>
      </div>
      <img src={image} alt="" width="300px" height="300px" />
      <button>Add to order</button>
    </div>
  );
}

export default Food;
