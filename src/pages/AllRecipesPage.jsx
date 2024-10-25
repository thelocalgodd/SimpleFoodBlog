import BaseLayout from "../layout/BaseLayout";
import "./pages.css";

import apricot from "../assets/homepage-images/apricot-crostata3-resized.webp";
// import blueberry from "../assets/homepage-images/blueberry-crumble4-resized.webp";
// import polentaCake from "../assets/homepage-images/";
import BlogPost from "../components/BlogPost";

function AllRecipesPage() {
  return (
    <BaseLayout>
      <div className="allrecipes-images">
        <BlogPost
          author="mawarre"
          date="May 17, 2020"
          tags="baking, dessert, recipes"
          image={apricot}
          recipeName={"Apricot Crostata"}
          description={
            "This is a test, please remove and replace with real info on SimpleFood Blog"
          }
        />
      </div>
    </BaseLayout>
  );
}

export default AllRecipesPage;
