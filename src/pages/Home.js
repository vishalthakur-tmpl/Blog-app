import banner from "../images/banner.svg";
import { Link } from "react-router-dom";
import AllArticles from "../components/AllArticles";

const Home = () => {
  return (
    <div className="container">
      <div className="image">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>

      <div className="banner-title">
        <Link to="/article">
          <h1>
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
        </Link>
      </div>

      <div className="banner-subtitle">
        <p>
          Why Ghost (& Figma) instead of Medium, Wordpress or other options?
        </p>
      </div>
      <hr className="hr1-line" />

      <div className="allArticles">
        <AllArticles />
      </div>
    </div>
  );
};

export default Home;
