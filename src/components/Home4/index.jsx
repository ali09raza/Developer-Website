import { ReactComponent as MouseIcon } from "../../assets/icons/MouseIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/icons/LineIcon.svg";
import { ReactComponent as DiamondIcon } from "../../assets/icons/DiamondIcon.svg";
import "./home4.scss";
import Navbar from "../Navbar";

const Home4 = () => {
  return (
    <div>
      <Navbar />
      <div className="home4"></div>
      <div id="container5">
        <MouseIcon />
        <LineIcon />
        <DiamondIcon id="diamond" />
      </div>
      <div className="page5-text">
        <p className="works">Blogs</p>
        <p className="works-below">
          My thoughts on technology and business, welcome to subscribe
        </p>
      </div>
      <hr className="upper-line" />

      <div className="code-image5"></div>
      <div className="image-sidetext">
        <p className="heading-sidetext">
          What does it take to become a web developer?
        </p>
        <p className="subtext-sidetext">
          Web development, also known as website development, encompasses a
          variety of tasks and processes involved in creating websites for the
          internet…
        </p>
      </div>
      <hr className="lower-line" />
    </div>
  );
};

export default Home4;
