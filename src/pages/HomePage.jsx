import BaseLayout from "../layout/BaseLayout";

import _1 from "../assets/homepage-images/apricot-crostata3-resized.webp";
import _2 from "../assets/homepage-images/blueberry-crumble4-resized.webp";
import _3 from "../assets/homepage-images/cropped-banana-bread2-resized.webp";
import _4 from "../assets/homepage-images/plum-tart2-square-resized.webp";
import _5 from "../assets/homepage-images/rhubarb4-resized.webp";
import _6 from "../assets/homepage-images/ricotta-raspberry-tart3-resized.webp";
import _7 from "../assets/homepage-images/strawberry-and-fig-stack1-resized.webp";
import _8 from "../assets/homepage-images/tarte-tatin1.webp";

function HomePage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">Home</p>
        </div>

        <p className="quote-icon">{'"'}</p>

        <div className="intro-text">
          <p>
            Welcome to Simple food. Delicious, simple to prepare recipes that
            celebrate fresh seasonal ingedients, and the joy of cooking and
            eating.
            <br />
            <span>margaret</span>
          </p>
        </div>

        <div className="secondary-text">
          <p>
            This month I’m featuring recipes that highlight fruit as a main
            ingredient. With natural sweetness and beautiful flavours, whatever
            fruit is in season should be eaten fresh, but also used sensitively
            to create both sweet and savoury dishes. Here’s a sample of my
            favourites. Recipe links below.
          </p>
        </div>
        <div className="image-s">
          <img src={_1} alt="" />
          <img src={_2} alt="" />
          <img src={_3} alt="" />
          <img src={_4} alt="" />
          <img src={_5} alt="" />
          <img src={_6} alt="" />
          <img src={_7} alt="" />
          <img src={_8} alt="" />
        </div>

        <div>
          <ul>
            <li>Banana bread with peaches, blueberries and thick yoghurt</li>
            <li>Tarte tatin with rosemary</li>
            <li>Strawberry and fig pastries</li>
            <li>Ricotta and raspberry tarts</li>
            <li>Blueberry and apple crumble</li>
            <li>Plum tart</li>
            <li>Baked rhubarb with vanilla meringue</li>
            <li>Apricot crostata</li>
          </ul>

          <p>
            I’d love to hear if you have tried any of the recipes. Why not share
            a photo on Facebook or Instagram with the #simplefood and
            #cookingathome tags.
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

export default HomePage;
