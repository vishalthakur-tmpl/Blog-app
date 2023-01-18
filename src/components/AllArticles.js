import React from "react";
import { Link } from "react-router-dom";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
import img4 from "../images/img4.svg";
import img5 from "../images/img5.svg";

const AllArticles = () => {
  const posts = [
    {
      id: 1,
      title: "Here are some things you should know regarding how we work",
      img: img1,
    },
    {
      id: 2,
      title: "Here are some things you should know regarding how we work",
      img: img2,
    },
    {
      id: 3,
      title: "Here are some things you should know regarding how we work",
      img: img3,
    },
    {
      id: 4,
      title: "Here are some things you should know regarding how we work",
      img: img4,
    },
    {
      id: 5,
      title: "Here are some things you should know regarding how we work",
      img: img5,
    },
  ];

  return (
    <>
      <div>
        <h1>All Articles</h1>
      </div>
      <div className="articles">
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.img} alt={`blog${post.id}`} />
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
