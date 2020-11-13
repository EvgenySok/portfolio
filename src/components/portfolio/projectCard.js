import React, { useState, useEffect } from 'react'
import ProjectPopup from './projectPopup'

const ProjectCard = ({ project }) => {
  const [isActivatePopup, SetIsActivatePopup] = useState(false)

  useEffect(() => {
    if (isActivatePopup) {
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '15px'
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    };
  }, [isActivatePopup])

  return (
    <div className="project-card"
      style={{ backgroundImage: `url(${project.images[0]})` }}
    >

      <div className="project-hover"
        onClick={() => SetIsActivatePopup(!isActivatePopup)}
      >
        <div>{project.title}</div>
        <div className="project-tags">
          {project.tags.map(tag => <span>{tag}</span>)}
        </div>

        <div className="more"><span>more...</span></div>
      </div>

      <ProjectPopup isActivatePopup={isActivatePopup} SetIsActivatePopup={SetIsActivatePopup} project={project} />
    </div>
  )
}
export default ProjectCard