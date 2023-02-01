import React from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const AllArticles = ({ posts, totalPages, page, paginate }) => {
  return (
    <>
      <div>
        <h1>All Articles</h1>
      </div>
      <div className="articles">
        {posts.map((post) => (
          <Link to={`/article/${post.id}`} key={post.id}>
            <div className="card">
              <div className="card-img">
                <img src={post.bannerImg} alt="article-img" />
              </div>
              <div className="card-title">
                <h3>{post.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        className="pagination"
        count={totalPages.length}
        color="primary"
        page={page}
        onChange={(e, value) => paginate(value)}
      />
    </>
  );
};

export default AllArticles;
