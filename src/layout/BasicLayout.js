import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BasicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
