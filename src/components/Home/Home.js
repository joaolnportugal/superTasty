import React from "react";
import "./Home.css";
import Food from "./Food";


function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <img
          className="homeImage"
          src="https://wallpaperaccess.com/full/1401021.jpg"
          alt=""
        />
      </div>
      {/*appetizer 1x*/}
      <div className="homeRow">
        <Food />
        <Food />
      </div>
      {/*main dish 6x*/}
      <div className="homeRow"></div>
      {/*beverage 1x*/}
      <div className="homeRow"></div>
      {/*dessert 1x*/}
      <div className="homeRow"></div>
    </div>
  );
}

export default Home;
