import React from 'react';
import './skill.css'; // Pastikan untuk mengimpor CSS Anda

const skill = () => {
    const skill = [
        { name: 'Figma', logo: require('./assets/logos/figma.png') },
        { name: 'Tailwind CSS', logo: require('./assets/logos/tailwind.png') },
        { name: 'React JS', logo: require('./assets/logos/react.png') },
        { name: 'Laravel', logo: require('./assets/logos/laravel.png') },
    ];

    return (
        <div className="skills-container">
            <div className="skills-wrapper">
                {skill.map((skill, index) => (
                    <div className="skill" key={index}>
                        <img src={skill.logo} alt={skill.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default skill;