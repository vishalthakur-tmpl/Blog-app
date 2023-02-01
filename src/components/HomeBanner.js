import React from "react";
import { Link } from "react-router-dom";

const HomeBanner = ({ bannerBlog }) => {
  return (
    <>
      <div className="image">
        <img
          src={bannerBlog.bannerImg}
          alt={`blog${bannerBlog.id}`}
          className="banner-image"
        />
      </div>
      <div className="banner-title">
        <Link to={`/article/${bannerBlog.id}`}>
          <h1>{bannerBlog.title}</h1>
        </Link>
      </div>
      <div className="banner-subtitle">
        <p>{`${bannerBlog.subtitle}`}</p>
      </div>
    </>
  );
};

export default HomeBanner;
