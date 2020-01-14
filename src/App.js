import React from 'react';
import githubLogo from './images/github-logo.svg';
import linkedinLogo from './images/linkedin-logo.svg';
import resume from './images/resume.svg';
import medium from './images/medium.svg';
import './App.css';

export default () => (
  <div className="app">
    <div className="main">
      <p className="name">Dhanapal Jayapandi</p>
      <div className="imgs">
        {
          [
            { href: 'https://github.com/djay93', src: githubLogo, alt: 'github-logo' },
            { href: '/doc/resume.pdf', src: resume, alt: 'resume' },
          ].map(({ href, src, alt  }) => (
            <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
              <img className="img-button" src={src} alt={alt} />
            </a>
          ))
        }
      </div>
      <p className="job-title">Software Engineering Manager ‧ Software Architect</p>
      <p className="location">Atlanta, USA</p>
    </div>
    <div className="footer">
      Icon made by&nbsp;
      <a href="https://www.freepik.com/">freepik</a>
      &nbsp;from&nbsp;
      <a href="http://www.flaticon.com/">www.flaticon.com</a>
    </div>
  </div>
);
