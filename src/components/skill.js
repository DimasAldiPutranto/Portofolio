import React from "react";
import "./skill.css"; // Pastikan untuk mengimpor CSS Anda

const Skill = () => {
  const skills = {
    frontend: [
      { name: "React JS", logo: require("./assets/logos/react.png") },
      { name: "Tailwind CSS", logo: require("./assets/logos/tailwind.png") },
      { name: 'Bootstrap', logo: require('./assets/logos/bootstrap.png') },
      { name: 'CSS', logo: require('./assets/logos/css.png') },
      
    ],
    backend: [{ name: "Laravel", logo: require("./assets/logos/laravel.png") }],
    programmingAndTools: [
        // { name: 'JavaScript', logo: require('./assets/logos/javascript.png') },
        { name: 'Git', logo: require('./assets/logos/git.png') },
        { name: 'GitHub', logo: require('./assets/logos/github.png') },
        { name: 'VSCode', logo: require('./assets/logos/vscode.png') },
    ],
  };

  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <div style={{ textAlign: "center" }}>
          <h3>Frontend</h3>
          <div className="skills-category">
            {skills.frontend && skills.frontend.length > 0 ? (
              skills.frontend.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.logo} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))
            ) : (
              <p>No frontend skills available.</p>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h3>Backend</h3>
          <div className="skills-category">
            {skills.backend && skills.backend.length > 0 ? (
              skills.backend.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.logo} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))
            ) : (
              <p>No backend skills available.</p>
            )}
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h3>Tools</h3>
          <div className="skills-category">
            {skills.programmingAndTools &&
            skills.programmingAndTools.length > 0 ? (
              skills.programmingAndTools.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.logo} alt={skill.name} />
                  <p>{skill.name}</p>
                </div>
              ))
            ) : (
              <p>No programming languages or tools available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
