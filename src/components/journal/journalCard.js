import React from "react";
import { useHistory } from "react-router";

const JournalCard = ({ img, title, subTitle }) => {

   const history = useHistory();

   const handleClick = () => {
     history.push("/blog");
   }
  return (
    <div className="col">
      <div className="journal-card">
        <div className="journal-card-img" onClick={handleClick}>
          <img src={img} alt="img" />
        </div>
        <div className="journal-card-txt">
          <h4>{title}</h4>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
