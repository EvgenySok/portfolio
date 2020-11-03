import React from 'react'
import projectsData from './projectsData'



const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__title">My Portfolio</div>
        <div className="portfolio__projects">
          {projectsData.map(project => (
            <div className="project-card" style={{ backgroundImage: `url(${project.img})` }}>
              <div className="project-hover">
                <div></div>
                <div className="project-tags">
                  {project.tags.map(tag => <span>{tag}</span>)}
                </div>
                <div className="more"><span>more...</span></div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  )
}
export default Portfolio