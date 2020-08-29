import React, {useEffect} from 'react'
import './ProjectCard-style.css'

const ProjectCard = props => {
   
   const { project, handleClick, isDarkMode } = props

   useEffect(() => {
      if(isDarkMode){
         document.getElementById(`${project.title}`).classList.add('night-text-dulled') 
      }
      if(!isDarkMode) {
         document.getElementById(`${project.title}`).classList.remove('night-text-dulled') 
      }
   }, [isDarkMode])


   const cardClick = () => {
      handleClick(project)
   }



   const manageHoverTitle = inOrOut => {
      if(inOrOut === 'in'){
         if(isDarkMode) { document.getElementById(`${project.title}`).classList.add('night-hover') }
      }
      if(inOrOut === 'out'){
         if(isDarkMode) { document.getElementById(`${project.title}`).classList.remove('night-hover') }
      }
   }

   return(
      <div className="projectcard-container" 
         onMouseOver={() => manageHoverTitle('in')} 
         onMouseLeave={() => manageHoverTitle('out')}
         onClick={() => cardClick()} 
         id={project.title} 
         >
         {project.title}
      </div>
   )
}

export default ProjectCard