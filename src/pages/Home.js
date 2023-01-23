// import { useEffect } from "react";
import AllArticles from "../components/AllArticles";
import HomeBanner from "../components/HomeBanner";
import banner from "../images/banner.svg";
import img1 from "../images/img1.svg";
import img2 from "../images/img2.svg";
import img3 from "../images/img3.svg";
import img4 from "../images/img4.svg";
import img5 from "../images/img5.svg";

const Home = () => {
  // useEffect(() =>{
  //   console.log('hello')
  // },[])

  const posts = [
    {
      id: 0,
      title:
        "A few words about this blog platform, Ghost, and how this site wasm made",
      subtitle:
        "Why Ghost (& Figma) instead of Medium, Wordpress or other options?",
      img: banner,
    },
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
    <div className="container">
      <HomeBanner bannerBlog={posts[0]} />
      <hr className="hr1-line" />

      <div className="allArticles">
        <AllArticles posts={posts} />
      </div>
    </div>
  );
};

export default Home;
