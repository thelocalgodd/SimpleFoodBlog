/* eslint-disable react/prop-types */
function BlogPost({ image, recipeName, description, date, tags }) {
  return (
    <div className="blogpost">
      <img src={image} alt="" />

      <div className="main">
        <div className="blogpost-left">
          <div>
            <p>By: mawarre</p>
            <p>{date}</p>
            <p>{tags}</p>
          </div>
        </div>

        <div className="blogpost-right">
          <h1>{recipeName}</h1>
          <p>{description}</p>
          <p className="readmore">READ MORE</p>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
