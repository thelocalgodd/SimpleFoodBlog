import BaseLayout from "../layout/BaseLayout";

import _1 from "../assets/vegetables/beetroot1-resized.jpg";
import _2 from "../assets/vegetables/carrots-and-beets1-resized.png";
import _3 from "../assets/vegetables/eggplant-mezze1.webp";
import _4 from "../assets/vegetables/farro-with-pumpkin2-resized.jpg";
import _5 from "../assets/vegetables/hummus3-resized.jpg";
import _6 from "../assets/vegetables/mushrooms-with-polenta3-resized.jpg";
import _7 from "../assets/vegetables/patatas-puttanesca1-resized.jpg";
import _8 from "../assets/vegetables/smashed-peas6-resized.jpg";
import _9 from "../assets/vegetables/stuffed-mushrooms2-resized.png";
import _10 from "../assets/vegetables/vege-soup1-resized.jpg";
import _11 from "../assets/vegetables/zucchini-with-currants2-resized.jpg";

function VegetablesPage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">Vegetables</p>
        </div>

        <p className="quote-icon">{'"'}</p>

        <div className="intro-text">
          <p>
            Eat Food. Not too much. Mostly Plants <br />
            <span>Michael Pollan</span>
          </p>
        </div>

        <div className="secondary-text">
          <p>
            If you want to live a healthier life one easy thing to do is eat
            more vegetables. Here are recipes to inspire you to make and eat
            vegetables more often. Recipe links below.{" "}
          </p>
        </div>

        <div className="salads-images">
          <div className="images">
            <img src={_1} alt="salad" />
            <img src={_2} alt="salad" />
            <img src={_3} alt="salad" />
            <img src={_4} alt="salad" />
            <img src={_5} alt="salad" />
            <img src={_6} alt="salad" />
            <img src={_7} alt="salad" />
            <img src={_8} alt="salad" />
            <img src={_9} alt="salad" />
            <img src={_10} alt="salad" />
            <img src={_11} alt="salad" />
          </div>
        </div>

        <ul>
          <li> Charred eggplant with capers</li>
          <li>Carrots and beets and all the good things</li>
          <li>Patatas puttanesca</li>
          <li>Stuffed mushrooms</li>
          <li>Spiced carrot and brown rice</li>
          <li>Hummus</li>
          <li>Maple roasted pumpkin with farro</li>
          <li>Grilled portabello mushrooms with polenta</li>
          <li>Smashed peas with fennel and mint</li>
          <li>Zucchini with currants and pine nuts</li>
          <li>Herby vegetable soup</li>
          <li>Roasted beetroot with hazelnuts and thyme</li>
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

export default VegetablesPage;
