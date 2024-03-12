import React from "react";
import "./home.scss";
import { ReactComponent as DashboardIcon } from "../../assets/icons/Dashboard.svg";
import { ReactComponent as PersonIcon } from "../../assets/icons/PersonIcon.svg";
import { ReactComponent as CodeIcon } from "../../assets/icons/CodeIcon.svg";
import { ReactComponent as ComputerIcon } from "../../assets/icons/ComputerIcon.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/EditIcon.svg";
import { ReactComponent as EmailIcon } from "../../assets/icons/EmailIcon.svg";
import { ReactComponent as EmailIcon1 } from "../../assets/icons/EmailIcon1.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/MapIcon.svg";
import profile from "../../assets/images/profile.png";
import { ReactComponent as BagIcon } from "../../assets/icons/BagIcon.svg";
import { ReactComponent as ChainIcon } from "../../assets/icons/ChainIcon.svg";
import { ReactComponent as DownloadIcon } from "../../assets/icons/DownloadIcon.svg";
export const HomePage = () => {
  return (
    <div id="homePage">
      <div className="navbar1">
        <div className="navItem">
          <DashboardIcon />
        </div>
        <div className="navItem">
          <PersonIcon />
        </div>
        <div className="navItem">
          <CodeIcon />
        </div>
        <div className="navItem">
          <ComputerIcon />
        </div>
        <div className="navItem">
          <EditIcon />
        </div>
        <div className="navItem">
          <EmailIcon />
        </div>
      </div>

      <div className="heading">
        <p>Developer</p>
      </div>
      <div className="profileDiv">
        <div>
          <img src={profile} alt="Profile" className="profileImage" />
        </div>
        <div className="profileText">
          <p className="personName">Sinan</p>
          <p id="subtext">Full-stack developer</p>
          <div className="para">
            <p className="email-container">
              <EmailIcon1 className="email-icon" />
              abdurrahman_sinan@hotmail.com
            </p>
            <p className="email-container">
              <MapIcon className="email-icon" />
              Turkey
            </p>
            <p className="email-container">
              <BagIcon className="email-icon" />
              Full-time / Freelancer
            </p>
            <p className="email-container">
              <ChainIcon className="email-icon" />
              www.sinantokmak.com
            </p>
          </div>
          <div className="flex-container">
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
            <p>React</p>
          </div>
          <button className="download-button">
            Download CV <DownloadIcon />
          </button>
        </div>
      </div>
      <div className="additionalDiv">
        <p>{"<h1>"}</p>
        <p className="bigtext">Hey</p>
        <p className="bigtext">I’m Sinan,</p>
        <p className="bigtext">Full-stack developer</p>
        <p>{"</h1>"}</p>
        <p className="para2">{"< p>"}</p>
        <p className="para2">
          I help business grow by crafting amazing web experiences. If you’re
          looking for a developer that likes to get stuff done,
        </p>
        <p className="para2">{"< /p>"}</p>
      </div>
      <div className="additionalDiv1">
        <div className="container1">
          <p className="numbers">4</p>
          <div className="text-container">
            <p className="numbers-text">Programming</p>
            <p className="numbers-text1">Language</p>
          </div>
        </div>
        <div className="container1">
          <p className="numbers">6</p>
          <div className="text-container">
            <p className="numbers-text">Programming</p>
            <p className="numbers-text1">Language</p>
          </div>
        </div>
        <div className="container1">
          <p className="numbers">8</p>
          <div className="text-container">
            <p className="numbers-text">Programming</p>
            <p className="numbers-text1">Language</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
