import "./Experience.css"
import "../components/Common.css"
import ExperienceCard from "./ExperienceCard";
const Experience = ()=>{
     return (
         <div className='details__section' id='experience'>
            <div className='details__container'>
                <div className="details__heading">
                <h1>Experience</h1>
                </div>
                <div className="details__details">
                    <ExperienceCard/>
                </div>
                </div>
        </div>
    )
}

export default Experience;