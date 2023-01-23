import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 192.168.1.27:8080/home

const HomeBanner = () => {
  const [bannerBlog, setbannerBlog] = useState([]);

  useEffect(() => {
    setbannerBlog(bannerData);
    // eslint-disable-next-line
  }, []);

  const bannerData = {
    id: "9a65e0d6-d06a-4558-827e-3ed2914ac0f9",
    title: "Title using routes and controller",
    subtitle: "Again a subtitle using routes and controller",
    bannerImg:
      "https://raw.githubusercontent.com/Ritwikrajsingh/ritwikrajsingh.github.io/master/assets/images/banner1.jpg",
    createdAt: "2023-01-18T07:31:09.762Z",
    updatedAt: "2023-01-18T07:31:09.762Z",
  };

  // const URL = "https://jsonplaceholder.typicode.com/photos";
  // const [temp, setTemp] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(URL);
  //     const data = await res.json();
  //     setTemp(data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  // >>>>>>>>>Another Method>>>>>>>>>>>>>>

  //   const fetchData = async () => {
  //     const res = await fetch("http://192.168.1.27:localhost:8080/");
  //     const data = await res.json();
  //     setbannerBlog(data);
  //   };

  // //     method:'GET',
  //   //      headers: {
  //     //      'Content-type': 'application/json'
  //       //  },

  // useEffect(() => {
  //     fetchData();
  // }, []);

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
