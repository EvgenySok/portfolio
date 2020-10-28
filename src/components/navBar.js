import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";

const NavBar = () => {
  const [onNavBar, setNavBar] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setNavBar(window.pageYOffset)
    })
  },[])

  console.log(onNavBar > 200);
  return (
    <div>
      <nav className={`${onNavBar > 200 ? "on-navbar" : ""}`}>
        <div className="container">
          <div className="logo">
            <Link to="./">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div>
            <ul className="nav-menu">
              <li>
                <Link to="/hj">home</Link>
              </li>
              <li>
                <Link to="./#">about</Link>
              </li>
              <li>
                <Link to="./#">portfolio</Link>
              </li>
              <li>
                <Link to="./#">blog</Link>
              </li>
              <li>
                <Link to="./#">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
