import "./home2.scss";
import { ReactComponent as MouseIcon } from "../../assets/icons/MouseIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/icons/LineIcon.svg";
import { ReactComponent as DiamondIcon } from "../../assets/icons/DiamondIcon.svg";
import { ReactComponent as AngleBracketsIcon } from "../../assets/icons/AngleBracketIcon.svg";
import { ReactComponent as ComputerBlackIcon } from "../../assets/icons/ComputerBlackIcon.svg";
import { ReactComponent as MobileIcon } from "../../assets/icons/MobileIcon.svg";
import { ReactComponent as Html5Icon } from "../../assets/icons/HTML5Icon.svg";
import { ReactComponent as CssIcon } from "../../assets/icons/CssIcon.svg";
import { ReactComponent as JavascriptIcon } from "../../assets/icons/JavascriptIcon.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/ReactIcon.svg";
const Home2 = () => {
  return (
    <>
      <div className="home2"></div>
      <div id="container3">
        <MouseIcon />
        <LineIcon />
        <DiamondIcon id="diamond" />
      </div>
      <div className="container3-1">
        <AngleBracketsIcon />
      </div>
      <div className="skills">
        <p className="skills-p">Skills</p>
        <p className="skills-p1">
          I am striving to never stop learning and improving
        </p>
      </div>
      <div className="web-box">
        <ComputerBlackIcon className="comp-icon" />
        <p className="web-p">Web Development</p>
        <p className="html-p">HTML·CSS·JS·REACT</p>
      </div>
      <div className="app-box">
        <MobileIcon className="comp-icon" />
        <p className="web-p">App Development</p>
        <p className="html-p">iOS·Android</p>
      </div>
      <div className="progrmming-icons">
        <div className="html5">
          <Html5Icon />
        </div>
        <div className="css">
          <CssIcon />
        </div>
        <div className="javascript">
          <JavascriptIcon />
        </div>
        <div className="react">
          <ReactIcon />
        </div>
      </div>
    </>
  );
};

export default Home2;
