import React from 'react';
import './Contact.css'; 

import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className="page-container">
      <h1>Contact Information</h1>
      <p style={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>
        Feel free to reach out!
        Email: mjmfangonilo@tip.edu.ph
      </p>

  
      <div className="contact-card-container">
      
        <div className="contact-card">

        
          <a
            href="https://github.com/joshlwlrma"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link1"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/josh-michael-fangonilo-196782390/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link2"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>


          <a
            href="https://www.facebook.com/joshfangonilo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link4"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

        </div>
      </div>
    </div>
  );
}

export default Contact;