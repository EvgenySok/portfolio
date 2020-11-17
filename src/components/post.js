import React from 'react';
import { useParams } from "react-router-dom"
import journalData from './journal/journalData';
import NavBar from './navBar';

const Post = () => {
  const { title } = useParams()
  const { img, subTitle, description } = journalData.filter(
    (post) => post.title === title
  )[0];
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="post">
          <div className="post-block">
            <div className="post-block-img">
              <img src={img} alt="img" />
            </div>
            <div className="post-txt">
              <h1>{title}</h1>
              <h2 className="subtitle">{subTitle}</h2>
              <p className="description-post">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post