import React from 'react';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>

      <div className="services-container">
        <div className="services-box">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>
            I create responsive, fast, and modern websites using the latest technologies like HTML, CSS,
            JavaScript, React.js, and Tailwind CSS. My focus is on building clean, user-friendly interfaces
            that work seamlessly across all devices and browsers.
          </p>
          <a href="/web-development" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="fa-solid fa-palette"></i>
          <h3>UI/UX Design</h3>
          <p>
            I design user interfaces that are not only visually attractive but also easy to use.
            My focus is on creating clean, intuitive layouts that improve user experience across all devices.
            By combining creativity with usability, I turn ideas into designs that people love to interact with.
          </p>
          <a href="/ui-ux" className="btn">Read More</a>
        </div>

        <div className="services-box">
          <i className="fa-brands fa-java"></i>
          <h3>Java Development</h3>
          <p>
            I build reliable, scalable, and efficient backend systems using Java.
            With a strong grasp of Core Java, Object-Oriented Programming, and data structures,
            I create software solutions that are clean, modular, and maintainable.
          </p>
          <a href="/java-development" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
