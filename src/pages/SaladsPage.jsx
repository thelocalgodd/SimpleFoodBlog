import BaseLayout from "../layout/BaseLayout";

import _1 from "../assets/salads/apple-salad5-resized.jpg";
import _2 from "../assets/salads/avocado-rocket2-resized.jpg";
import _3 from "../assets/salads/carrot-salad-2-resized.jpg";
import _4 from "../assets/salads/cous-cous-with-summer-greens1-resized.webp";
import _5 from "../assets/salads/noodle-salad1-resized.webp";
import _6 from "../assets/salads/potato-salad-1-resized.jpg";
import _7 from "../assets/salads/pumpkin-fetta-and-pine-nuts-1-resized.jpg";
import _8 from "../assets/salads/rice-2-resized.webp";
import _9 from "../assets/salads/roasted-cauliflower1.webp";
import _10 from "../assets/salads/sweet-chilli-dressing1-square-resized-e1522656058614.jpg";
import _11 from "../assets/salads/tomato-mezze2.webp";
import _12 from "../assets/salads/zucchini-3-resized.jpg";

function SaladsPage() {
  return (
    <BaseLayout>
      <div className="salads-images">
        <p>
          A selection of some of my favourite salad recipes. Wonderful all year
          round, but especially beautiful in spring and summer, when the weather
          calls us outdoors. Recipe links below, or see all my salad recipes.
        </p>

        <div className="images">
          <img src={_1} alt="" />
          <img src={_2} alt="" />
          <img src={_3} alt="" />
          <img src={_4} alt="" />
          <img src={_5} alt="" />
          <img src={_6} alt="" />
          <img src={_7} alt="" />
          <img src={_8} alt="" />
          <img src={_9} alt="" />
          <img src={_10} alt="" />
          <img src={_11} alt="" />
          <img src={_12} alt="" />
        </div>

        <ul>
          <li>Tomato salad with sumac</li>
          <li>Chinese cabbage and crispy noodle salad</li>
          <li>Roasted cauliflower with pomegranate, almonds and mint</li>
          <li>Chopped salad with sweet chilli and sesame dressing</li>
          <li>Summer greens with cous cous</li>
          <li>Carrot salad with coriander, chilli and sesame</li>
          <li>Avocado slammer salad</li>
          <li>Potato and pea salad with hazelnut dressing</li>
          <li>Roasted pumpkin with feta, tomato and pine nuts</li>
          <li>Rocket, apple and parmesan salad</li>
          <li>Zucchini and mint salad - summer on a plate</li>
          <li>Cranberry and wild rice salad</li>
        </ul>
      </div>

      <div className="share-section">
        <p>Share:⭐⭐⭐⭐⭐</p>

        <div className="like-button">
          <button className="likebutton">⭐ Like</button>

          <p>75 likes</p>
        </div>
      </div>
    </BaseLayout>
  );
}

export default SaladsPage;
