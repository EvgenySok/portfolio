import React, { useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";

const NavBar = () => {
  const [onNavBar, setNavBar] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavBar(window.pageYOffset)
    })
  },[])

  return (
    <div>
      <nav className={`${onNavBar > 200 ? "on-navbar" : ""}`}>
        <div className="container">
          <div className="logo">
            <a href=""><img src={logo} alt="Logo" /></a>
          </div>
          <div>
            <ul className="nav-menu">
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">about</a>
              </li>
              <li>
                <a href="">portfolio</a>
              </li>
              <li>
                <a href="">blog</a>
              </li>
              <li>
                <a href="">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
