import BaseLayout from "../layout/BaseLayout";
import "./pages.css";

import BlogPost from "../components/BlogPost";

import beetrootHummus from "../assets/allrecipes/beetroot-hummus1.webp";
import cauliflower from "../assets/allrecipes/cauliflower-cheese2.webp";
import chicken from "../assets/allrecipes/chicken-with-cider2.webp";
import lemon from "../assets/allrecipes/lemon-bar-2a-resized.webp";
import polentaCake from "../assets/allrecipes/polenta-cake3.webp";
import potatoes from "../assets/allrecipes/potatoes-with-rosemary5.webp";
import tiramisu from "../assets/allrecipes/tiramisu1.webp";
import rainbowsalad from "../assets/allrecipes/rainbow-salad2.webp";
import cookies from "../assets/allrecipes/triple-choc-cookies1-resized.webp";
import pumpkin from "../assets/allrecipes/pumpkin-muffins2.webp";

function AllRecipesPage() {
  return (
    <BaseLayout>
      <div className="allrecipes-images">
        <BlogPost
          date="May 17, 2020"
          tags="baking, dessert, recipes"
          image={polentaCake}
          recipeName={"Orange, almond and polenta cake"}
          description={
            "I  love slightly unusual cakes – my pistachio and walnut crumbly cake and gingerbread cake with blood orange syrup are two examples of my leaning towards not-too-sweet, spiced, no-icing cakes that are better suited to grown-ups than the under eights in your household. And this cake is another in that category. There is texture from…"
          }
        />
        <BlogPost
          date={"May 16, 2020"}
          tags={"dinner, recipes"}
          image={chicken}
          recipeName={"Baked Chicken with cider and smoky bacon"}
          description={
            "Once in a while i am struck all over again by just how blue the sky appears on wind-played autumn mornings, blue enough to bruise a heart. Sanober Khan The weather has turned in my part of the world, and autumn has rushed in with crisp mornings, clear azure skies and the promise of cool…"
          }
        />
        <BlogPost
          date={"April 13, 2020"}
          tags={"dinner, recipes"}
          image={potatoes}
          recipeName={"Potatoes with rosemary and sea salt"}
          description={
            "A great marriage is one where each person, without agenda, celebrates the unique and distinctive characteristics of the other, and lovingly helps them be the best possible version of themselves. When I see a couple who express this in their relationship I am always moved and inspired, because they are so much more together than they could possibly…"
          }
        />
        <BlogPost
          date={"April 12, 2020"}
          tags={"dinner, recipes"}
          image={tiramisu}
          recipeName={"Tiramisu"}
          description={
            "Sam Baldwin: What is “tiramisu”? Jay: You’ll find out. Sam Baldwin: Well, what is it? Jay: You’ll see! Sam Baldwin: Some woman is gonna want me to do it to her and I’m not gonna know what it is!Jay: You’ll love it! Sleepless in Seattle Far from being the traditional Italian dessert you assume it…"
          }
        />
        <BlogPost
          date={"April 10, 2020"}
          tags={"dinner, recipes"}
          image={cauliflower}
          recipeName={"Luxury cauliflower cheese"}
          description={
            "My husband used to say that the only purpose of cauliflower was as a vehicle for cheese sauce. Given his childhood memories of soggy cauliflower cooked in the pressure cooker – limp, transparent and almost tasteless – it has taken me some time to excite him about the wonders of cauliflower when it is roasted,"
          }
        />
        <BlogPost
          date={"April 7, 2020"}
          tags={"dinner, recipes"}
          image={rainbowsalad}
          recipeName={"Rainbow salad with haloumi"}
          description={
            "If you are looking for a salad packed with goodness, and full of delicious and colourful ingredients (and there is a saying that the more colourful your meal, the healthier it is) then this is a salad for you. Topped with crispy-on-the-outside, oozy-on-the-inside haloumi it stands on its own as a vegetarian lunch, or a…"
          }
        />
        <BlogPost
          date={"April 5, 2020"}
          tags={"dinner, recipes"}
          image={cookies}
          recipeName={
            "Triple choc cookies (desperate times call for desperate measures)"
          }
          description={
            "In my part of the world flour has become a scarce commodity, and to scratch my baking itch I decided to make a recipe that used buckwheat flour, all that was available for me to buy this week. I found a few recipes and eventually made an amalgam of my own, using as as a…"
          }
        />
        <BlogPost
          date={"March 29, 2020"}
          tags={"dinner, recipes"}
          image={beetrootHummus}
          recipeName={"Beetroot hummus"}
          description={
            "Middle age is mostly getting excited about different flavours of hummus. Unknown over 45 year old. Middle age is my demographic – and caramelised onion, chilli and sweet potato are some of my favourite ways to zhush up hummus. Hummus as originally conceived – chick peas, garlic, tahini, salt, lemon and olive oil is a…"
          }
        />
        <BlogPost
          date={"March 28, 2020"}
          tags={"dinner, recipes"}
          image={pumpkin}
          recipeName={
            "Pumpkin, pecan and pepita muffins: goodness in difficult times"
          }
          description={
            "When times are tough we often turn to familiar things that give us comfort and peace. It could be listening to music or walking on the beach at sunset; reading or meditating or praying. For me, cooking is always a haven; I can be creative and nurturing and useful at the same time. All across…"
          }
        />
        <BlogPost
          date={"March 2, 2020"}
          tags={"dinner, recipes"}
          image={lemon}
          recipeName={"Luscious lemon bars"}
          description={
            " When did the lemons learn the same creed as the sun? Pablo Neruda The concept of this recipe, which is a staple in America, but not well known at all in my part of the world, is genius. Two of the most delicious things in the world – shortbread and lemon curd – brought together…"
          }
        />

        <button className="olderposts">Older Posts</button>
      </div>
    </BaseLayout>
  );
}

export default AllRecipesPage;
