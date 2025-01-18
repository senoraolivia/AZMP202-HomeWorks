import React from "react";
import { 
  FaAndroid, FaAngular, FaBootstrap, FaVuejs, FaReact, FaLeaf, 
  FaLaravel, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaJs 
} from "react-icons/fa";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { FiSmile } from "react-icons/fi";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"

const Skills = () => {

  const skills = [
    { name: "Balsamiq", experience: "5 Month Experience", icon: <FiSmile />, color: "black" },
    { name: "Figma", experience: "1 Month Experience", icon: <PiFigmaLogoDuotone />, color: "red" },
    { name: "Microsoft Visio", experience: "5 Month Experience", icon: <PiMicrosoftWordLogoFill />, color: "navy" },
    { name: "HTML", experience: "3 Months Experience", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", experience: "3 Months Experience", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Sass", experience: "3 Months Experience", icon: <FaSass />, color: "#CF649A" },
    { name: "JavaScript", experience: "3 Months Experience", icon: <FaJs />, color: "#F7DF1E" },
    { name: "Bootstrap", experience: "3 Months Experience", icon: <FaBootstrap />, color: "#563D7C" },
    { name: "React", experience: "1 Month Experience", icon: <FaReact />, color: "#61DAFB" },
    { name: "MongoDB", experience: "1 Month Experience", icon: <FaLeaf />, color: "#47A248" },
    { name: "Node.js", experience: "1 Month Experience", icon: <FaNodeJs />, color: "#339933" },
    
  ];

  return (
    <section className="py-5">
        <h1 className="text-center" style={{fontSize: "5rem", marginTop: "2rem"}}>Skills</h1>
      <div className="container" >
        <div className="row text-center g-4" style={{margin: "2rem"}}>
          {skills.length &&
          skills.map((skill, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body">
                  <div 
                    className="mb-3" 
                    style={{ fontSize: "2rem", color: skill.color }}
                  >
                    {skill.icon}
                  </div>
                  <h5 className="card-title">{skill.name}</h5>
                  <p className="card-text text-muted">{skill.experience}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


