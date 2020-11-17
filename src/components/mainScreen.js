import React, { useState, useEffect, useRef } from "react";
import SocialBloc from "./socialBloc";

const MainScreen = () => {
  const summaries = ["Ahroriddin Kodirov.", "Developeur.", "Freelancer."];

  const [summerCurent, setSummerCurent] = useState(0);
  const [currentLeter, setCurrentLeter] = useState(-1);
  const [myTimeOut, setTimeOut] = useState(150);
  const [changingText, setChengingText] = useState("");

  if (summerCurent > 2) {
    setSummerCurent(0);
    setCurrentLeter(-1);
  }

  const triker = () => {
    setCurrentLeter(currentLeter + 1);
    setChengingText(
      summaries[summerCurent].substring(0, currentLeter + 1) + "|"
    );
  };

  useEffect(() => {
    if (summaries[summerCurent].length === currentLeter) {
      setSummerCurent(summerCurent + 1);
      setCurrentLeter(-1);
      setTimeOut(800);
    } else {
      setTimeOut(150);
      setTimeout(() => {
        triker();
      }, myTimeOut);
    }
  }, [currentLeter]);
  return (
    <div className="main-screen">
      <div className="main-screen-item">
        <h1>
          I'm <span>{changingText}</span>
        </h1>
        <p>designer, developeur, freelancer</p>
        <SocialBloc/>
      </div>
    </div>
  );
};

export default MainScreen;
