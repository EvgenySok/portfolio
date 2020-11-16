import React from "react";
import { Link } from "react-router-dom";

const JournalCard = ({ img, title, subTitle }) => {
  return (
    <div className="col">
      <div className="journal-card">
        <div className="journal-card-img">
          <Link>
            <img src={img} alt="img" />
          </Link>
        </div>
        <div className="journal-card-txt">
          <Link to={`/post/${title}`}>
            <h4>{title}</h4>
          </Link>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default JournalCard;
