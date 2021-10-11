import React from "react";
import "./Food.css";

function Food() {
  return (
    <div className="food">
      <div className="foodInfo">
        <p>Pork gyosa dumpling</p>
        <p className="foodPrice">
          <small>€</small>
          <strong>3,90</strong>
        </p>
        <div className="foodRating">
          <p> ⭐ </p>
        </div>
      </div>
      <img
        src="https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/02/GuiozaCaseiro_CozinhandoPara2ou1.jpg"
        alt=""
      />
      <button>Add to order</button>
    </div>
  );
}

export default Food;
