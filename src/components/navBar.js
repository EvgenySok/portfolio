import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";

const NavBar = () => {
  const [onNavBar, setNavBar] = useState(0);
  const linkArray = ["home", "about", "portfolio", "blog", "contact"];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavBar(window.pageYOffset);
    });
  }, []);

  return (
    <div>
      <nav className={`${onNavBar > 200 ? "on-navbar" : ""}`}>
        <div className="container">
          <div className="logo">
            <a href="/#">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div>
            <ul className="nav-menu">
              {linkArray.map(link => {
                return (
                  <li>
                    <a href="/#">{link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
