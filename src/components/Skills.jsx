import "./Skills.css"
import { FaNodeJs, FaServer, FaGithub, FaUsers, FaKey, FaLayerGroup } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiPostman, SiCplusplus, SiReact } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";

const Skills = () => {

    const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#939393ff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Mongoose", icon: SiMongodb, color: "#800000" },
  { name: "RESTful API", icon: FaServer, color: "#6D6D6D" },
  { name: "JWT Authentication", icon: FaKey, color: "#767676ff" },
  { name: "Clean Architecture", icon: FaLayerGroup, color: "#FF9800" },
  { name: "GitHub", icon: FaGithub, color: "#555555ff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++ (Basics)", icon: SiCplusplus, color: "#00599C" },
  { name: "Problem Solving", icon: GiBrain, color: "#FFB300" },
  { name: "Team Collaboration", icon: FaUsers, color: "#4CAF50" },
  { name: "Attention to Detail", icon: AiOutlineEye, color: "#3F51B5" }
];
    return (
        <div className='details__section' id='skills'>
            <div className='details__container'>
                <div className="details__heading">
                    <h1>Skills</h1>
                </div>
                <div className="details__details skill__container">
                    {skills.map(({ name, icon: Icon, color }) => (
                        <div key={name} className="skill">
                            <Icon size={30} color={color} />
                            <p>{name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>);
}

export default Skills;