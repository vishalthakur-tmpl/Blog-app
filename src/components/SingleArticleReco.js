import React from "react";
import { Link } from "react-router-dom";

const SingleArticleReco = ({ readNext }) => {
  return (
    <>
      {readNext.map((post) => (
        <Link to={`/article/${post.id}/#top`} key={post.id}>
          <div className="postsItems">
            <div className="card-img">
              <img src={post.bannerImg} alt="article-img" />
            </div>
            <div className="card-title">
              <h3>{post.title}</h3>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SingleArticleReco;
