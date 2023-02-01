import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const AuthDetails = ({ data, formattedDate }) => {
  return (
    <>
      <div className="author-flex">
        <img
          src={data.article.Author.profileImg}
          alt="author"
          className="author-image"
        />
        <div className="article-info">
          <span className="author-name">{data.article.Author.fullName}</span>
          <span className="publish-dateTime">
            {formattedDate(data.article.createdAt)}
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
          <a href={`https://wa.me/${data.article.Author.linkWa}`}>
            <RiWhatsappFill />
          </a>
        </span>
      </div>
    </>
  );
};

export default AuthDetails;
