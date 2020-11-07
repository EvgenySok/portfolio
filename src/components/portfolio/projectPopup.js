import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'


const ProjectPopup = ({ isActivatePopup, SetIsActivatePopup, project }) => {
  const { title, images, aboutTeam, aboutProject, technologies, webSite } = project
  return (
    <div id="poopup" className={`popup${isActivatePopup ? ' open' : ''}`}>
      <div className="mask-for-close-popup"
        onClick={() => SetIsActivatePopup(!isActivatePopup)}> </div>

      <div className="popup__body">
        <div className="popup__content">
          <a href="#text__title" class="popup__close" onClick={() => SetIsActivatePopup(!isActivatePopup)}>X</a>

          <Carousel  >
            {images.map(img => {
              return (
                <div style={{ backgroundImage: `url(${img})` }}
                  className="project-card">
                  {/* <p className="legend">Legend 1</p> */}
                </div>)
            })}
          </Carousel>

          <div className="popup__title">{title}</div>

          <div className="popup__about-team">
            <h2>About our development team</h2>
            <p>{aboutTeam}</p>
          </div>

          <div className="popup__about-project">
            <h2>About project</h2>
            <p>{aboutProject}</p>
          </div>

          <div className="popup__about-technologies">
            <h2>The following technologies were used</h2>
            {technologies.map(it => { return <div> {it} </div> })}
          </div>

          <div className="popup__site-link">
            <h2>Link</h2>
            <p>{webSite}</p>
          </div>

        </div>
      </div>

    </div>
  )
}
export default ProjectPopup