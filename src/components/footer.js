import React from "react";
import SocialBloc from "./socialBloc";

const Footer = () => {

  return (
    <div className="footer">
      <div className="container">
        <div className="footer__body">
          <SocialBloc />
          <div className="current-year">&copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
