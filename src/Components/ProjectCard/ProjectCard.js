import React from 'react'
import './ProjectCard-style.css'

const ProjectCard = props => {
   
   const { project, handleClick } = props

   return(
      <div className="projectcard-container" onClick={() => handleClick(project)}>
         {project.title}
      </div>
   )
}

export default ProjectCard