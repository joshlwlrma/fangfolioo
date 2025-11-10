import React from 'react';
import './About.css'; // <-- Imports all styles

function About() {
  return (
    // This wrapper holds BOTH of your cards
    <div className="about-page-wrapper">
    
      {/* --- CARD 1: Your 3D Flip Card (FangFolio ID) --- */}
      <div className="card">
        <img 
          src={process.env.PUBLIC_URL + "/fangfolioid.png"} 
          alt="About Me" 
          className="card__icon" 
        />
        <div className="card__content">
          <p className="card__title">About Me</p>
          <p className="card__description">
            Currently a 3nd Year Student at Technological Institute of the
            Philippines, He is a student with interests in coding and has learned
            languages like C++, Python, HTML, CSS, JavaScript, Java and is
            currently learning the framework of Laravel and the React library. He
            also has a passion for Graphic Designing and has taken a liking in
            Web Development. Besides this, He has also grown fond of Networking,
            Database Management, and Cybersecurity.
            <br />
            <br />
            Other hobbies and interests include playing Video Games such as
            Genshin Impact, Valorant, Mobile Legends and listening to Music and
            watching Dramas.
          </p>
        </div>
      </div>

      {/* --- CARD 2: Your New Stack Card (The Cat) --- */}
      <div className="stack">
        <div className="stack-card">
          <div className="stack-image-container">
            <img 
              src={process.env.PUBLIC_URL + "/images/fangcats.png"} 
              alt="Gabgab" 
              className="stack-image"
            />
          </div>
          {/* This is the new title for your cat card */}
        </div>
      </div>

    </div>
  );
}

export default About;