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
        <img
          className="superTastyTransparent"
          src="https://dl.dropboxusercontent.com/s/dnxtnfb2yw5hiok/super%20tasty%20opaco%20png.png?dl=0"
          alt=""
        />
      </div>

      {/*appetizer 2x*/}
      <div className="foodType">
        <span className="foodTypeText">Appetizers</span>
      </div>

      <div className="homeRow">
        <Food
          id="64616861"
          title="Pork Gyosa Dumplings"
          price={2.9}
          image="https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/02/GuiozaCaseiro_CozinhandoPara2ou1.jpg"
          rating="4,7"
        />
        <Food
          id="796531"
          title="Carrot Orange Ginger Soup"
          price={2.1}
          image="https://www.yayforfood.com/wp-content/uploads/vegan-carrot-orange-ginger-soup-featured-scaled.jpg.webp"
          rating="4,1"
        />
      </div>

      {/*main dish 6x*/}
      <div className="foodType">
        <span className="foodTypeText">Main Dishes</span>
      </div>
      <div className="homeRow">
        <Food
          id="9969971"
          title="Crisp Pork Belly Ramen"
          price={6.9}
          image="https://content.cooklybookly.com/e15d9418-f6b8-11ea-a422-0b030ab87222/image/9f74e35e-188b-11eb-bc0e-2bcc6df3f9c1/9f74e35e-188b-11eb-bc0e-2bcc6df3f9c1.jpg"
          rating="4,3"
        />
        <Food
          id="12654"
          title="Sushi Tasting Experience"
          price={8.3}
          image="https://i.pinimg.com/564x/23/69/13/236913e7a97d324b4566bbf0cf0e216d.jpg"
          rating="4,6"
        />
        <Food
          id="7412586"
          title="Crispy Chicken Pesto and Bacon Salad"
          price={7.8}
          image="https://s3.us-east-2.amazonaws.com/pfimg1/001/b3/8b/b38bf3bf3b0e2f4202e62e722ee2c4ec_500x500.jpg"
          rating="4,8"
        />
        <Food
          id="523021458"
          title="Vegetarian Spinach and Mushroom Lasagna"
          price={7.8}
          image="https://www.simplyrecipes.com/thmb/ljeigkdGUw0M693aGslbYgYPI9o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-3-320e403c6ed948d0afde42269c013bbf.jpg"
          rating="4,8"
        />
      </div>

      {/*beverage 1x*/}
      <div className="foodType">
        <span className="foodTypeText">Beverages</span>
      </div>
      <div className="homeRow">
        <Food
          id="5666666"
          title="Raspberry Peach Lemonade"
          price={1.5}
          image="https://heytherejae.com/wp-content/uploads/2021/07/2-1000x800.png"
          rating="4,1"
        />
        <Food
          id="7895485666"
          title="Matcha Bobba Tea"
          price={2.0}
          image="https://www.vitamix.com/media/other/images/Iced-Matcha-Bubble-Tea-470-449.jpg"
          rating="4"
        />
      </div>

      {/*dessert 1x*/}
      <div className="foodType">
        <span className="foodTypeText">Desserts</span>
      </div>
      <div className="homeRow">
        <Food
          id="22233333"
          title="Molten Chocolate Lava Cake"
          price="1.75"
          image="https://laurenslatest.com/wp-content/uploads/2016/11/Molten-Chocolate-Lava-Cakes-1.jpg"
          rating="4"
        />
        <Food
          id="999999"
          title="Salted Caramel Cheesecake"
          price="1.75"
          image="https://www.lifeloveandsugar.com/wp-content/uploads/2019/01/Salted-Caramel-Cheesecake3-1.jpg"
          rating="4,7"
        />
      </div>
    </div>
  );
}

export default Home;
