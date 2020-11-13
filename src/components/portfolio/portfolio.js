import React from 'react'
import projectsData from './projectsData'
import ProjectCard from './projectCard'



const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__title">My Portfolio</div>
        <div className="portfolio__projects">
          {projectsData.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </div >
  )
}
export default Portfolio