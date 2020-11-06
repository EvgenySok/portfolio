import React from "react";
import JournalCard from "./journalCard";
import journalData from "./journalData";

const Journal = () => {
  return (
    <div className="journal">
      <div className="container">
        <div className="journal-title">
          <h2>journal</h2>
        </div>
        <div className="journal-block">
          <div className="row">
            {journalData.map(({ img, title, subTitle }) => {
              return (
                <JournalCard
                  key={title}
                  img={img}
                  title={title}
                  subTitle={subTitle}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
