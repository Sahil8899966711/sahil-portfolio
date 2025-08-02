import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const UIUXDesign = () => {
  return (
    <section className="services-details">
      <h2>UI/UX Design</h2>
      <p>
        I design intuitive and user-friendly interfaces with a strong focus on accessibility and consistency.
        From wireframes to final visuals, I ensure every design choice enhances the user experience.
      </p>
      <Link to="/" className="btn">Back to Services</Link>
    </section>
  );
};

export default UIUXDesign;
