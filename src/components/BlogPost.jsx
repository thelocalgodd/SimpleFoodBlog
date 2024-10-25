/* eslint-disable react/prop-types */
function BlogPost({ image, recipeName, description, author, date, tags }) {
  return (
    <div className="blogpost">
      <img src={image} alt="" />

      <main>
        <div className="blogpost-left">
          <span>By {author} </span>
          <span>{date}</span>
          <span>{tags}</span>
        </div>

        <div className="blogpost-right">
          <h1>{recipeName}</h1>
          <br />
          <p>{description}</p>
          <p className="readmore">READMORE</p>
        </div>
      </main>
    </div>
  );
}

export default BlogPost;
