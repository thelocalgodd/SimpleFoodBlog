import "./styles/components.css";

function Footer() {
  return (
    <footer>
      <div className="first">
        <div className="one">
          <p>FIND RECIPES</p>
          <p>
            baking breakfast brunch dessert dinner ideas lunch recipes salad
            snacks
          </p>
        </div>

        <div className="two">
          <p>SEARCH FOR RECIPES</p>
          <div>
            <input type="text" placeholder="Enter keywords" />
            <button>Search</button>
          </div>
        </div>

        <div className="three">
          <p>FACEBOOK</p>
          <p>
            Follow Simple Food on Facebook and share your photos and recipes
          </p>
        </div>

        <div className="four">
          <p>SIMPLE FOOD ON TWITTER</p>
          <div>
            <blockquote className="twitter-tweet">
              <p lang="en" dir="ltr">
                Thank God for the day!
              </p>
              &mdash; the boy (@dzidula_1){" "}
              <a href="https://twitter.com/dzidula_1/status/1847157000964022626?ref_src=twsrc%5Etfw">
                October 18, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
            ></script>
          </div>{" "}
        </div>

        <div className="two">
          <p>SUBSCRIBE TO BLOG VIA EMAIL</p>
          <p>
            Enter your email address to subscribe to this blog and recieve
            notifications of new posts by email.{" "}
          </p>
          <div>
            <input type="text" placeholder="Email Address" />
          </div>

          <p>Join 536 other subscribers</p>
        </div>

        <div className="copyright">
          <p>COPYRIGHT</p>
          <p>
            All the recipes and photos on this blog are licensed under a
            Creative Commons CC-BY-NC licence. This means you are free to use
            them, as long as it is not for commercial purposes, and you need to
            attribute Margaret Warren (recipes) and/or Andrew Warren (photos) as
            the creator.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
