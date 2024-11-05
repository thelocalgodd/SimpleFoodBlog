import BaseLayout from "../layout/BaseLayout";

import _1 from "../assets/dinner/beef-stew2-resized.webp";
import _2 from "../assets/dinner/cavolo-nero2-resized.webp";
import _3 from "../assets/dinner/img_0478-resized-e1534299128931.webp";
import _4 from "../assets/dinner/lamb-burger4-resized.webp";
import _5 from "../assets/dinner/lamb-cutlets1-resized1.webp";
import _6 from "../assets/dinner/mushroom-risotto1-resized.webp";
import _7 from "../assets/dinner/pasta-with-prawns1-resized.webp";
import _8 from "../assets/dinner/pork-with-mustard1-resized.webp";
import _9 from "../assets/dinner/salsa-verde1-resized2.webp";
import _10 from "../assets/dinner/snapper1-resized.webp";
import _11 from "../assets/dinner/zucchini-fritter4-resized.webp";

function DinnerPage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">Dinner</p>
        </div>

        <p className="quote-icon">{'"'}</p>

        <div className="intro-text">
          <p>
            The dinner hour is a sacred, happy time when everyone should be
            together and relaxed.
            <br />
            <span>Julia Child</span>
          </p>
        </div>

        <div className="secondary-text">
          <p>
            Here are some of my favourite things to eat for dinner – simple,
            full of flavour and wonderful to share with family and friends.
            Recipe links below.{" "}
          </p>
        </div>

        <div className="salads-images">
          <div className="images">
            <img src={_1} alt="Dinner" />
            <img src={_2} alt="Dinner" />
            <img src={_3} alt="Dinner" />
            <img src={_4} alt="Dinner" />
            <img src={_5} alt="Dinner" />
            <img src={_6} alt="Dinner" />
            <img src={_7} alt="Dinner" />
            <img src={_8} alt="Dinner" />
            <img src={_9} alt="Dinner" />
            <img src={_10} alt="Dinner" />
            <img src={_11} alt="Dinner" />
          </div>
        </div>

        <ul>
          <li> Chilli linguine with cavolo nero </li>
          <li>Eggplant curry </li>
          <li>Lamb burgers with good things </li>
          <li>Mushroom risotto </li>
          <li>Orecchiette with salsa verde </li>
          <li>Snapper with coconut, ginger and coriander </li>
          <li>Zucchini, mint and haloumi fritters </li>
          <li>Chilli prawns with pasta </li>
          <li>Lamb with cumin and sweet chilli</li>
          <li>Rich beef stew with winter vegetables</li>
          <li>Pork with creamy leek and mustard sauce </li>
        </ul>

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

export default DinnerPage;
