import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import BasicLayout from "./layout/BasicLayout";
import Notfound from "./pages/Notfound";
import SingleArticle from "./pages/SingleArticle";
import "./App.css";

function App() {
  const routesPath = [
    {
      path: "/",
      Component: <Home />,
    },
    {
      path: "/about",
      Component: <About />,
    },
    {
      path: "/article/:blogId",
      Component: <SingleArticle />,
    },
  ];
  return (
    <Routes>
      {routesPath.map(({ path, Component }, index) => {
        return (
          <Route
            key={index}
            path={path}
            exact
            element={<BasicLayout>{Component}</BasicLayout>}
          />
        );
      })}

      <Route exact path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
