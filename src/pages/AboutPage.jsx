import BaseLayout from "../layout/BaseLayout";

import "./pages.css";

import _1 from "../assets/about/15095680_10154720548494028_3843074715573536216_n.webp";
import _2 from "../assets/about/15492497_683744341802743_8119648275296990065_n.webp";
import _3 from "../assets/about/180166_1805264648187_1855008_n.webp";
import _4 from "../assets/about/18156704_10155268584954028_5988731494862157687_o.webp";
import _5 from "../assets/about/18664598_1404601402916494_6046288920994674336_n.webp";

function SweetThingsPage() {
  return (
    <BaseLayout>
      <main>
        <div>
          <p className="home-header">About</p>
        </div>

        <div className="intro-text-about">
          <p>
            Ever since I was a young girl I have loved cooking and making up
            recipes. I started cooking in the 1970s, when complexity was king –
            think prawn coctails, chocolate orange mousse cups, beef Wellington
            etc. etc. As an adult I have traversed pretty much all the cooking
            trends – nouvelle cuisine, Asian fusion, weird things on pizza, and
            more – but all the while, what I cooked day to day at home was a
            much pared back, simpler style that better suited me and my family –
            food that concentrated on flavour, local ingredients in season, and
            was easy to prepare and cook. This is the type of food that is most
            like me, and what I want to share.
            <br /> <br />
            I live in Brisbane with my husband Andrew, who this year, after 5
            long years of study, has fulfilled a life long dream and become a
            doctor, and I have three amazing kids who are 23, 21 and 17. I’m a
            librarian by day (please don’t think glasses, shushing finger and
            pursed lips – I have the best job and it’s nothing like what most
            people imagine a librarian does) and cook, domestic manager,
            listening ear, driving instructor, help line and chauffeur by night.
            <br />
            <br />
            Here’s me and my crew, love them to bits. <br />
          </p>

          <div className="image-s-about">
            <img src={_1} alt="family photos" />
            <img src={_2} alt="family photos" />
            <img src={_3} alt="family photos" />
            <img src={_4} alt="family photos" />
            <img src={_5} alt="family photos" />
          </div>

          <p className="ending-text-about">
            I love to cook and my husband loves photography, so a passion for
            both of us was born in this blog.
            <br />
            <br />
            Thanks for stopping by,
            <br />
            <br />
            Margaret
          </p>
        </div>

        <div className="share-section">
          <p>Share:⭐⭐⭐⭐⭐</p>
          <div className="like-button">
            <button className="likebutton">⭐ Like</button>

            <p>75 likes</p>
          </div>
        </div>

        <div className="comments"></div>
      </main>
    </BaseLayout>
  );
}

export default SweetThingsPage;
