import { ReactComponent as MouseIcon } from "../../assets/icons/MouseIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/icons/LineIcon.svg";
import { ReactComponent as DiamondIcon } from "../../assets/icons/DiamondIcon.svg";
import "./page4.scss";
import { ReactComponent as LeftAngleBracketIcon } from "../../assets/icons/LeftAngleBracket.svg";
const Page4 = () => {
  return (
    <div>
      <div className="home3"></div>
      <div id="container4">
        <MouseIcon />
        <LineIcon />
        <DiamondIcon id="diamond" />
      </div>
      <div className="page4-text">
        <p className="works">Works</p>
        <p className="works-below">
          I had the pleasure of working with these awesome projects
        </p>
      </div>
      <div className="leftangle">
        <LeftAngleBracketIcon />
      </div>
      <div>
        <div className="gallery"></div>
        <div className="code-image"></div>
        <div className="code-image1"></div>
      </div>
    </div>
  );
};

export default Page4;
