import React from "react";
import logoWhite from "../images/logo-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul className="article-tagLists">
          <li>Digital product design</li>
          <li>Remote work</li>
          <li>UX design</li>
          <li>Distributed teams</li>
          <li>Creativity</li>
          <li>Strategy</li>
          <li>Suspense</li>
          <li>Growth</li>
        </ul>
      </div>

      <div>
        <div className="logoBottom">
          <img src={logoWhite} alt="logo" />
        </div>
        <div className="website-info">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus.
          </p>
        </div>
        <div>
          <ul className="website-social-links">
            <li>
              <a href="https://twitter.com/">Twitter</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vishalthakur8a8/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://rss.com/">RSS</a>
            </li>
          </ul>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} Nordic Rose Co. All rights
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
