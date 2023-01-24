import { useState, useEffect } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import AllArticles from "../components/AllArticles";
import HomeBanner from "../components/HomeBanner";

const Home = () => {
  const API = "https://nordic-rose-api.onrender.com/home";
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
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <PacmanLoader size={20} color={"#F37A24"} />
        </div>
      ) : data && data.length > 0 ? (
        <>
          <HomeBanner bannerBlog={data[0]} />
          <hr className="hr1-line" />
          <div className="allArticles">
            <AllArticles posts={data[1]} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Home;

// const [data, setData] = useState([]);

//   const apiData = async () => {
//     try {
//       const res = await axios.get("https://nordic-rose-api.onrender.com/home");
//       setData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     apiData();
//   }, []);
