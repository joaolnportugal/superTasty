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
      <p>Appetizers</p>
      {/*appetizer 2x*/}
      <div className="homeRow">
        <Food
          title="Pork Gyosa Dumplings"
          price="2,90"
          image="https://www.cozinhandopara2ou1.com.br/wp-content/uploads/2019/02/GuiozaCaseiro_CozinhandoPara2ou1.jpg"
          rating="4,7"
        />
        <Food
          title="Carrot Orange Ginger Soup"
          price="2,10"
          image="https://www.yayforfood.com/wp-content/uploads/vegan-carrot-orange-ginger-soup-featured-scaled.jpg.webp"
          rating="4,1"
        />
      </div>
      <p>Main Dishes</p>
      {/*main dish 6x*/}
      <div className="homeRow">
        <Food
          title="Crisp Pork Belly Ramen"
          price="6,90"
          image="https://content.cooklybookly.com/e15d9418-f6b8-11ea-a422-0b030ab87222/image/9f74e35e-188b-11eb-bc0e-2bcc6df3f9c1/9f74e35e-188b-11eb-bc0e-2bcc6df3f9c1.jpg"
          rating="4,3"
        />
        <Food
          title="Sushi Tasting Experience"
          price="8,30"
          image="https://i.pinimg.com/564x/23/69/13/236913e7a97d324b4566bbf0cf0e216d.jpg"
          rating="4,6"
        />
        <Food
          title="Crispy Chicken Pesto and Bacon Salad"
          price="7,80"
          image="https://s3.us-east-2.amazonaws.com/pfimg1/001/b3/8b/b38bf3bf3b0e2f4202e62e722ee2c4ec_500x500.jpg"
          rating="4,8"
        />
        <Food
          title="Vegetarian Spinach and Mushroom Lasagna"
          price="7,80"
          image="https://www.simplyrecipes.com/thmb/ljeigkdGUw0M693aGslbYgYPI9o=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__11__Vegetarian-Lasagna-LEAD-3-320e403c6ed948d0afde42269c013bbf.jpg"
          rating="4,8"
        />
      </div>
      <p>Beverages</p>
      {/*beverage 1x*/}
      <div className="homeRow">
        <Food
          title="Raspberry Peach Lemonade"
          price="1,50"
          image="https://heytherejae.com/wp-content/uploads/2021/07/2-1000x800.png"
          rating="4,1"
        />
        <Food
          title="Matcha Bobba Tea"
          price="2,00"
          image="https://www.vitamix.com/media/other/images/Iced-Matcha-Bubble-Tea-470-449.jpg"
          rating="4"
        />
      </div>
      <p>Desserts</p>
      {/*dessert 1x*/}
      <div className="homeRow">
        <Food
          title="Molten Chocolate Lava Cake"
          price="1,75"
          image="https://laurenslatest.com/wp-content/uploads/2016/11/Molten-Chocolate-Lava-Cakes-1.jpg"
          rating="4"
        />
        <Food
          title="Salted Caramel Cheesecake"
          price="1,75"
          image="https://www.lifeloveandsugar.com/wp-content/uploads/2019/01/Salted-Caramel-Cheesecake3-1.jpg"
          rating="4,7"
        />
      </div>
    </div>
  );
}

export default Home;
