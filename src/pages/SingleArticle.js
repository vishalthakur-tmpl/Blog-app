import React, { useState, useEffect } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useParams } from "react-router-dom";
import SingleArticleReco from "../components/SingleArticleReco";
import SocialShare from "../components/SocialShare";
import AuthDetails from "../components/AuthDetails";
import Eyes from "../images/eyes.png";
import SignUp from "../components/SignUp";

const SingleArticle = () => {
  const { blogId } = useParams();

  const API = `https://nordic-rose-api.onrender.com/article/${blogId}`;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiData = async () => {
    setLoading(true);
    await axios
      .get(API)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    apiData();
  }, [blogId]);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = (blogDate) => {
    const date = new Date(blogDate);
    const monthName = monthNames[date.getMonth()];
    const formatedDate =
      monthName.slice(0, 3) + " " + date.getDate() + ", " + date.getFullYear();
    return formatedDate;
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <PacmanLoader size={20} color={"#F37A24"} />
        </div>
      ) : data && Object.keys(data).length > 0 ? (
        <>
          <div className="article-container">
            <div className="article-title">
              <h1 id="top">{data.article.title}</h1>
            </div>

            <div className="article-subtitle">
              <p>{data.article.subtitle}</p>
            </div>
          </div>
          <div className="article-image">
            <img
              src={data.article.bannerImg}
              alt="Banner"
              className="article-banner"
            />
          </div>
          <div className="article-container">
            <hr className="hr2-line" />

            <div className="author-detail">
              <AuthDetails data={data} formattedDate={formattedDate} />
            </div>

            <div className="article-desc">
              <p style={{ paddingBottom: "35px" }}>{data.article.shortDesc}</p>
              <h3 style={{ paddingBottom: "35px" }}>
                {data.article.subheading}
              </h3>
              <div className="content-image">
                <img src={data.article.contentImg} alt="content-img" />
                <p style={{ fontSize: "14px", paddingBottom: "35px" }}>
                  {data.article.contentImgDesc}
                </p>
              </div>
              <p style={{ paddingBottom: "35px" }}>
                {data.article.description}
              </p>

              <div className="article-socialShare">
                <SocialShare />
              </div>

              <div className="article-tags">
                <h4>Tags: </h4>
                <ul className="article-tagList">
                  {data.article.tags.split(",").map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>

              <hr className="hr3-line" />

              <div className="about-author">
                <div>
                  <img
                    src={data.article.Author.profileImg}
                    alt="author"
                    className="author-image"
                  />
                </div>
                <div className="about">
                  <span className="author-name">
                    {data.article.Author.fullName}{" "}
                  </span>
                  <span>{data.article.Author.about}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="image-on-hr4">
            <hr className="hr4-line" />
            <img src={Eyes} alt="eyesPng" className="eyes-on-hr4" />
          </div>

          <div className="readNext">
            <h1>What to read next</h1>
            <div className="read-more-articles">
              <SingleArticleReco readNext={data.readNext} />
            </div>

            <div className="signUpField">
              <SignUp />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SingleArticle;
