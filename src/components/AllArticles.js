import React from "react";
import { Link } from "react-router-dom";

const AllArticles = ({ posts }) => {
  return (
    <>
      <div>
        <h1>All Articles</h1>
      </div>
      <div className="articles">
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.bannerImg} alt={`blog${post.id}`} />
            <Link to={`/article/${post.id}`}>
              <h4>{post.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllArticles;
