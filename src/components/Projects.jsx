import ProjectCard from "./ProjectCard";
import "./Projects.css"
const Projects =()=>{
    return(
        <div className='details__section' id='projects'>
            <div className='details__container projects__container'>
                <div className="details__heading">
                <h1>Projects</h1>
                </div>
                <div className="details__details project__details">
                    <ProjectCard/>
                </div>
                </div>
        </div>
    )
};

export default Projects;