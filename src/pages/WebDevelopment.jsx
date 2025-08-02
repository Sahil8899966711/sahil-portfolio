import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const WebDevelopment = () => {
  return (
    <section className="services-details">
      <h2>Web Development</h2>
      <p>
        I create fast, responsive, and modern websites using HTML, CSS, JavaScript, React.js, and Tailwind CSS.
        I ensure clean UI, cross-browser support, and performance optimization across all platforms.
      </p>
      <Link to="/" className="btn">Back to Services</Link>
    </section>
  );
};

export default WebDevelopment;
