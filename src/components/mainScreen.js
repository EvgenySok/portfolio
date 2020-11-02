import React from "react";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <div className="main-screen-item">
        <h1>
          I'm <span className="typed" ref={ref}></span>
        </h1>
        <p>designer, developeur, photographer</p>
      </div>
    </div>
  );
};

export default MainScreen;
