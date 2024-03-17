import "./page2.scss";
import { ReactComponent as MouseIcon } from "../../assets/icons/MouseIcon.svg";
import { ReactComponent as LineIcon } from "../../assets/icons/LineIcon.svg";
import { ReactComponent as DiamondIcon } from "../../assets/icons/DiamondIcon.svg";
const Page2 = () => {
  return (
    <>
      <div className="home1"></div>
      <div id="container">
        <MouseIcon />
        <LineIcon />
        <DiamondIcon id="diamond" />
      </div>
      <div className="cards">
        <p className="about-me">About Me</p>
      </div>
      <div className="card1">
        <p className="ptag">{"<p>"}</p>
        <p className="detail-card">
          <b className="bold-hello">Hello!</b> <br /> My name is Sinan and I
          specialize in web developement that utilizes HTML, CSS, JS, and REACT
          etc. <br /> I am a highly motivated individual and eternal optimist
          dedicated to writing clear, concise, robust code that works. Striving
          to never stop learning and improving.
          <br /> When I'm not coding, I am writing bolgs, reading, or picking up
          some new hands-on art project like photography.
          <br />I like to have my perspective and belief systems challenged so
          that I see the world through new eyes.
        </p>
        <p className="ptag">{"</p>"}</p>
      </div>
      <div className="laptop-image-container"></div>
    </>
  );
};

export default Page2;
