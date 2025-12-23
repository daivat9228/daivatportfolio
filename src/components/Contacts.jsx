import React from 'react';
import './Contacts.css';

const Contacts = ({ projectRef }) => {
  const handleLeftClick = () => {
    projectRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRightClick = () => {
    window.location.href = 'mailto:daivat796@gmail.com';
  };

  return (
    <div className="contacts">
    <div className="contacts-container">
      <div className="contacts-left" onClick={handleLeftClick}>
        <div className="portfolio-card">
          <span className="section-label">PORTFOLIO <span>→</span></span>
          <h2>Personal & <br/> Professional Projects </h2>
        </div>
        <div className="description-card">
          <p>Web Design, Webflow Development, and Creative Development.</p>
        </div>
      </div>
      
      <div className="contacts-right" onClick={handleRightClick}>
        <div className="get-in-touch-card">
          <span className="section-label">GET IN TOUCH  </span>
          <h2>Let's get to it, <br/>together.</h2>
        </div>
        
        <div className="start-project-card">
          <h1>Hire Me, if you can </h1>
          <span className="contact-btn">
            Contact me <span>→</span>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contacts;