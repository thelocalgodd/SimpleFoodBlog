import BaseLayout from "../layout/BaseLayout";

import _1 from "../assets/sweets/almond-cake1-resized.webp";
import _2 from "../assets/sweets/almond-fig-cake1-resized.webp";
import _3 from "../assets/sweets/coconut-cupcake1-resized.webp";
import _4 from "../assets/sweets/cranberry-cookie1-resized.jpg";
import _5 from "../assets/sweets/cropped-banana-bread2-resized.jpg";
import _6 from "../assets/sweets/date-and-ginger-slice3-resized.jpg";
import _7 from "../assets/sweets/donuts-resized.webp";
import _8 from "../assets/sweets/fingerlime-pannacotta1.webp";
import _9 from "../assets/sweets/lavendar-shortbread3-square.jpg";
import _10 from "../assets/sweets/nutella-brownie1-resized.webp";

import "./pages.css";

function SweetThingsPage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">Sweet things</p>
        </div>

        <p className="quote-icon">{'"'}</p>

        <div className="intro-text">
          <p>
            My 93-year-old grandma is a beautiful example of healthy living. She
            laughs a lot and always says, ‘Just be yourself!’ She also eats
            dessert every single day
            <br />
            <span>Rachel Boston</span>
          </p>
        </div>

        <div className="secondary-text">
          <p>
            Here’s some delicious sweet things to cook and eat, with much joy
            and no guilt! Recipe links below.
          </p>
        </div>

        <div className="image-s">
          <img src={_1} alt="almond cake" />
          <img src={_2} alt="almond fig cake" />
          <img src={_3} alt="cocunut cupcake" />
          <img src={_4} alt="cranberry cookie" />
          <img src={_5} alt="cropped banana" />
          <img src={_6} alt="date and ginger" />
          <img src={_7} alt="donuts" />
          <img src={_8} alt="fingerlime pannacotta" />
          <img src={_9} alt="lavendar shortbread" />
          <img src={_10} alt="nutella brownie" />
        </div>

        <div>
          <ul>
            <li>Panna cotta with finger lime</li>
            <li>Coconut cupcakes</li>
            <li>Doughnuts with strawberry sauce</li>
            <li>Fig, raspberry and ginger cake</li>
            <li>Oat, date and ginger slice</li>
            <li>Almond and vanilla cake</li>
            <li>Raspberry and hazelnut brownies</li>
            <li>Vanilla spiced yoghurt</li>
            <li>Vanilla and lavender biscuits</li>
            <li>Cranberry and pecan sugar cookies</li>
          </ul>

          <p>
            There’s more too! All <b>baking recipes</b> and{" "}
            <b>dessert recipes</b>.
          </p>
        </div>

        <div className="share-section">
          <p>Share:⭐⭐⭐⭐⭐</p>
          <div className="like-button">
            <button className="likebutton">⭐ Like</button>

            <p>75 likes</p>
          </div>
        </div>
      </main>
    </BaseLayout>
  );
}

export default SweetThingsPage;
