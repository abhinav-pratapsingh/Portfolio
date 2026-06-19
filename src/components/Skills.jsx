import "./Skills.css";
import {
  FaNodeJs,
  FaServer,
  FaGithub,
  FaKey,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiPostman,
  SiCplusplus,
  SiReact,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#939393" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Mongoose", icon: SiMongodb, color: "#800000" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },

    { name: "REST APIs", icon: FaServer, color: "#6D6D6D" },
    { name: "JWT Authentication", icon: FaKey, color: "#767676" },

    { name: "AWS EC2", icon: FaServer, color: "#FF9900" },
    { name: "Linux", icon: FaServer, color: "#FCC624" },
    { name: "Nginx", icon: FaServer, color: "#009639" },

    { name: "Git", icon: FaGithub, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#555555" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },

    { name: "MVC Architecture", icon: FaLayerGroup, color: "#FF9800" },
    { name: "Database Design", icon: SiMongodb, color: "#4CAF50" },
    { name: "API Security", icon: FaKey, color: "#E91E63" },
  ];

  return (
    <div className="details__section" id="skills">
      <div className="details__container">
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
    </div>
  );
};

export default Skills;