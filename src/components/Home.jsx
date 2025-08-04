import React from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

 // Make sure image is correct

const Home = () => {
  useEffect(() => {
  const typed = new Typed('.multiple-text', {
    strings: [ '<span class="role software">Software Developer</span>',
    '<span class="role designer">Web Designer</span>',],
    typeSpeed: 80,
    backSpeed: 60,
    backDelay: 1500,
    loop: true,
  });

  return () => {
    typed.destroy(); // cleanup
  };
}, []);


  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi, Myself</h3>
        <h1>Sahil Rajak</h1>
        <h3>
          And I'm a <span className="multiple-text"></span>
        </h3>
        <p style={{ width: '64%' }}>
          I design and develop modern, responsive, and user-friendly websites and web applications.
          With a passion for clean design and efficient code, I specialize in technologies like
          JavaScript, React.js, Tailwind CSS, and Java. Whether it's crafting elegant user interfaces
          or building robust backend systems, I enjoy solving real-world problems through technology.

          Let’s build something great together.
        </p>
          <div className="social-media">
  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
  <a href="https://linkedin.com/in/sahil-rajak-320b24246"><FontAwesomeIcon icon={faLinkedin} /></a>
  <a href="https://github.com/Sahil8899966711"><FontAwesomeIcon icon={faGithub} /></a>
</div>


        <a href="Resu.pdf" className="btn" target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>

      <div className="home-img">
        <img src= "resume-photo.jpg" alt="Sahil" />
      </div>
    </section>
  );
};

export default Home;
