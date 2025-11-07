import React from 'react';
import './Projects.css'; 

const projectsData = [
  {
    id: 1,
    title: 'TaraManila',
    imageUrl: process.env.PUBLIC_URL +'/images/taramnl.png',
    description: '1st Year HCI Project.',
    link: 'https://yuseongit.github.io/Tara-Manila/#content',
  },
  {
    id: 2,
    title: 'Ariosh',
    imageUrl: process.env.PUBLIC_URL +'/images/ariosh.png',
    description: '1st Year Computer Programming Project',
    link: 'https://joshlwlrma.github.io/ariosh/',
  },
  {
    id: 3,
    title: 'Ive Shopping',
    imageUrl: process.env.PUBLIC_URL +'/images/iveshopping.png',
    description: '1st Year HCI Activity (WIREFRAME)',
    link: 'https://www.canva.com/design/DAGXZxuT8bY/metpVJmvoPinRfFdAOtuZQ/view?utm_content=DAGXZxuT8bY&utm_campaign=designshare&utm_medium=link&utm_source=editor#1',
  },
  {
    id: 4,
    title: 'TIPTips',
    imageUrl: process.env.PUBLIC_URL +'/images/tiptips.png',
    description: '3rd Year Technopreneurship Project (WIREFRAME)',
    link: 'https://www.figma.com/proto/4gRbEovhIFAWNJE79eQLXj/TipTIPS-Animated?node-id=133-58&p=f&t=xEwbsaE5qsg5ZNJ1-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=133%3A58&show-proto-sidebar=1',
  },
];


function Projects() {
  return (
    <div className="page-container">
      <h1>Projects</h1>
      
      <div className="projects-grid">
        {projectsData.map((project) => (
          
          <div className="project-card" key={project.id}>
            
            <div className="project-card-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>

            <p className="project-card-title">{project.title}</p>
            
            <p className="project-card-body">
              {project.description}
            </p>
            
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-card-link"
            >
              View Project
            </a>
            
          </div>

        ))}
      </div>
    </div>
  );
}

export default Projects;