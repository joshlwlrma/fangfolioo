import React from 'react';
import './Skills.css';
import PixelTransition from '../components/PixelTransition'; 

const skillsData = [
  {
    id: 1,
    name: 'React, Laravel',
    imageUrl: process.env.PUBLIC_URL +'/images/laravel_react.png', 
    description: 'Used to make more complete websites!',
    color: '#fd7fb7',
  },
  {
    id: 2,
    name: 'HTML, CSS, JS',
    imageUrl: process.env.PUBLIC_URL +'/images/htmllcssjs.png',
    description: 'The classic trio to make dynamic websites!',
    color: '#f7df1e',
  },
  {
    id: 3,
    name: 'Python, C++, Java',

    imageUrl: process.env.PUBLIC_URL +'/images/pythoncplusplusjava.png',
    description: 'Current Tech Stack, used to create applications and solutions',
    color: '#2f7dcb', 
  },
  {
    id: 4,
    name: 'SQL',
    
    imageUrl: process.env.PUBLIC_URL +'/images/mySQL.png',
    description: 'Used for traversing through databases.',
    color: '#ff2d20',
  },
  {
    id: 5,
    name: 'Figma, Canva',
    imageUrl: process.env.PUBLIC_URL +'/images/figmacanva.png',
    description: 'For Graphic Designing, Wireframing, and Prototyping.',
    color: '#5be0a1', 
  },
      {
    id: 6,
    name: 'Amazon Web Services',
    imageUrl: process.env.PUBLIC_URL +'/images/aws.png',
    description: 'Utilizes cloud services to deploy to the web!',
    color: '#fd6d27', 
  },
  
];

function Skills() {
  return (
    <div className="page-container">
      <h1>Skills</h1>
      <p style={{ fontFamily: 'Poppins, sans-serif' }}>
        Hover over a card to see more details.
      </p>

      <div className="skills-grid">
        {skillsData.map((skill) => (
          <PixelTransition
            key={skill.id}
            
            firstContent={
              <img 
                src={skill.imageUrl} 
                alt={skill.name} 
                className="skill-card-image" 
              />
            }
            
            secondContent={
              <div className="skill-card-back">
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            }
            
            gridSize={10}
            pixelColor={skill.color}
            aspectRatio="0" 
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;