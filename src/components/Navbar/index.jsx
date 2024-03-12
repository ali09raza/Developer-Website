import React from "react";
import "./navbar.scss";
import { ReactComponent as Search } from "../../assets/icons/Search-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/Instagram.svg";
import { ReactComponent as Discord } from "../../assets/icons/Discord.svg";
import { ReactComponent as Github } from "../../assets/icons/Github.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <text id="logo">{"<C/>"}</text>
        <text id="logo1">SinanTokmak</text>
      </div>

      <div className="navbar-options">
        <ul>
          <li>
            <a className="li1" href="#Home">
              Home
            </a>
          </li>
          <li>
            <a className="li2" href="#Home">
              Blogs
            </a>
          </li>
          <div style={{ position: "relative" }}>
            <li>
              <input className="search-input" type="text" />
              <Search
                className="searchIcon"
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "30px",
                  transform: "translateY(-50%)",
                }}
              />
            </li>
          </div>
          <li className="instagram">
            <Instagram />
            <a className="instagram-anchor" href="#Home">
              Instagram
            </a>
          </li>
          <li className="instagram">
            <Discord />
            <a className="instagram-anchor" href="#Home">
              Discord
            </a>
          </li>
          <li className="instagram">
            <Github />
            <a className="instagram-anchor" href="#Home">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
