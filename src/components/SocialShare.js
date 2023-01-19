import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const SocialShare = () => {
  return (
    <>
      <div className="socialShare-flex">
        <Link>
          <div>
            <FaFacebook />
          </div>
          <div className="share-title">
            <p>Share on Facebook</p>
          </div>
        </Link>
      </div>
      <div className="socialShare-flex">
        <Link>
          <div>
            <BsTwitter />
          </div>
          <div className="share-title">
            <p>Share on Twitter</p>
          </div>
        </Link>
      </div>
      <div className="socialShare-flex">
        <Link>
          <div>
            <RiWhatsappFill />
          </div>
        </Link>
      </div>
    </>
  );
};

export default SocialShare;
