import React from 'react'
import './ProjectCard-style.css'

const ProjectCard = props => {
   
   const { project, handleClick } = props

   const cardClick = card => {
      // document.getElementById(`${project.title}`).style.fontWeight = 'bold'
      handleClick(project)
   }

   return(
      <div className="projectcard-container" onClick={() => cardClick(project)} id={project.title} >
         {project.title}
      </div>
   )
}

export default ProjectCard