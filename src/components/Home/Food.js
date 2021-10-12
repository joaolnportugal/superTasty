import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Food.css";

function Food({ title, image, price, rating }) {
  const [ state, dispatch] = useStateValue();
  console.log('cenas no carrinho');

  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Food;
