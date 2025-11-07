// src/pages/About.js

import React from 'react';
import './About.css'; // <-- Import your new CSS file

function About() {
  return (
    <div className="card">
    
      {/* This is the icon that shows first.
        It points to '/my-icon.png', which is in your 'public' folder.
      */}
      <img src="/fangfolioid.png" className="card__icon" />
      
      {/* This is the content that flips up on hover */}
      <div className="card__content">
        <p className="card__title">About Me</p>
        <p className="card__description">
Currently a 3nd Year Student at Technological Institute of the Philippines, He is a student with interests in coding and has learned languages like C++, Python, HTML, CSS, JavaScript, Java and is currently learning the framework of Laravel and the React library. He also has a passion for Graphic Designing and has taken a liking in Web Development. Besides this, He has also grown fond of Networking, Database Management, and Cybersecurity.
<br></br>
<br></br>Other hobbies and interests include playing Video Games such as Genshin Impact, Valorant, Mobile Legends and listening to Music and watching Dramas.
        </p>
      </div>

    </div>
  );
}

export default About;