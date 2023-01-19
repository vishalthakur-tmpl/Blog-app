import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SingleArticleReco from "../components/SingleArticleReco";
import SocialShare from "../components/SocialShare";
import banner from "../images/banner.svg";
import Author from "../images/author.jpeg";
import Eyes from "../images/eyes.png";

const SingleArticle = () => {
  return (
    <>
      <div className="article-container">
        <div className="article-title">
          <h1>
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
        </div>

        <div className="article-subtitle">
          <p>
            Why Ghost (& Figma) instead of Medium, Wordpress or other options?
          </p>
        </div>
      </div>
      <div className="article-image">
        <img src={banner} alt="Banner" className="article-banner" />
      </div>
      <div className="article-container">
        <hr className="hr2-line" />

        <div className="author-detail">
          <div className="author-flex">
            <img src={Author} alt="author" className="author-image" />
            <div className="article-info">
              <span className="author-name">Vishal Thakur</span>
              <span className="publish-dateTime">
                Apr 15, 2020 . 4 min read
              </span>
            </div>
          </div>
          <div className="author-social-link">
            <span>
              <Link>
                <FaFacebook />
              </Link>
            </span>
            <span>
              <Link>
                <BsTwitter />
              </Link>
            </span>
            <span>
              <Link>
                <RiWhatsappFill />
              </Link>
            </span>
          </div>
        </div>

        <div className="article-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
            posuere ligula. In eu dui molestie, molestie lectus eu, semper
            lectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
            posuere ligula. In eu dui molestie, molestie lectus eu, semper
            lectus.
          </p>

          <div className="article-socialShare">
            <SocialShare />
          </div>

          <div className="article-tags">
            <h4>Tags: </h4>
            <ul className="article-tagList">
              <li>product design</li>
              <li>culture</li>
            </ul>
          </div>

          <hr className="hr3-line" />

          <div className="about-author">
            <div>
              <img src={Author} alt="author" className="author-image" />
            </div>
            <div className="about">
              <span className="author-name">Vishal Thakur </span>
              <span>
                is a Design Founder & Advisor, Berlin School of Creative
                Leadership Executive MBA participant, Zippie advisor, Wolt
                co-founder, and Nordic Rose stakeholder.
              </span>
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
          <SingleArticleReco />
        </div>

        <div className="signUpField">
          <h2>Sign up for the newsletter</h2>
          <p>
            If you want relevant updates occasionally, sign up for the private
            newsletter. Your email is never shared.
          </p>
          <div className="inputEmail">
            <input type="email" placeholder="Enter your email..." />
            <button type="submit">SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
