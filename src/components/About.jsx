import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="/resume-photo.jpg" alt="Sahil" />
      </div>

      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Software Developer</h3>
        <p>
          I’m a passionate Software Developer with a strong interest in building efficient, scalable,
          and user-focused applications. With experience in both front-end and back-end technologies
          like JavaScript, React.js, Tailwind CSS, Java, and MySQL, I enjoy turning complex problems
          into clean, elegant code.

          I believe in writing code that not only works but adds real value.
          I’m constantly learning new tools and frameworks to stay updated and deliver high-quality solutions.
          As a fresher, I bring fresh ideas, dedication, and a strong will to grow with every project I take on.
        </p>
        <a href="#" className="btn">Read more</a>
      </div>
    </section>
  );
};

export default About;
