import { useState, useEffect } from "react";
import axios from "axios";
import PacmanLoader from "react-spinners/PacmanLoader";
import AllArticles from "../components/AllArticles";
import HomeBanner from "../components/HomeBanner";
import NotFound from "./Notfound";

const API_BASE = "https://nordic-rose-api.onrender.com/home";

const Home = () => {
  const [page, setPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [BannerId, setBannerId] = useState();
  const [blogs, setBlogs] = useState([]);
  const [banner, setBanner] = useState({});
  const [totalPages, setTotalPages] = useState([]);
  const [loading, setLoading] = useState(false);
  const perPage = screenWidth > 700 ? 8 : 5;

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const apiData = async () => {
    setLoading(true);
    let API = `${API_BASE}?perPage=${perPage}&pageNo=${page}`;
    await axios({
      method: "GET",
      url: API,
      params: {
        currentBanner: BannerId,
      },
    })
      .then((res) => {
        if (res.data.banner) {
          setBanner(res.data.banner);
          setBannerId(res.data.banner.id);
        }
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  useEffect(() => {
    apiData();
  }, [page, screenWidth]);

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <PacmanLoader size={20} color={"#F37A24"} />
        </div>
      ) : blogs.length && Object.keys(banner).length > 0 ? (
        <>
          <HomeBanner bannerBlog={banner} />
          <hr className="hr1-line" />
          <div className="allArticles">
            <AllArticles
              posts={blogs}
              totalPages={totalPages}
              page={page}
              paginate={(value) => setPage(value)}
            />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Home;

// let API;
// let request = {};
// if (screenWidth > 700) {
//   if (page > 1) {
//     console.log(page, BannerId);
//     request["currentBanner"] = BannerId;
//     console.log(request, "heloooooo");
//     API = `https://nordic-rose-api.onrender.com/home?perPage=8&pageNo=${page}`;
//   } else {
//     API = `https://nordic-rose-api.onrender.com/home?perPage=8`;
//   }
// } else {
//   if (page > 1) {
//     request["currentBanner"] = BannerId;
//     API = `https://nordic-rose-api.onrender.com/home?perPage=5&pageNo=${page}`;
//   } else {
//     API = `https://nordic-rose-api.onrender.com/home?perPage=5`;
//   }
// }

// useEffect(() => {
//   const handleResize = () => {
//     setScreenWidth(window.innerWidth);
//   };
//   window.addEventListener("resize", handleResize);
//   return () => {
//     window.removeEventListener("resize", handleResize);
//   };
// }, []);

// const apiData = async () => {
//   setLoading(true);
//   await axios
//     .get(API, request)
//     .then((res) => {
//       setData(res.data);
//       setLoading(false);
//     })
//     .catch((error) => {
//       console.log(error);
//       setLoading(false);
//     });
// };
// useEffect(() => {
//   apiData();
// }, [page, screenWidth]);
