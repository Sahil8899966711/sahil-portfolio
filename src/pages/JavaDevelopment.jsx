import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css';

const JavaDevelopment = () => {
  return (
    <section className="services-details">
      <h2>Java Development</h2>
      <p>
        I build robust, scalable Java applications using Spring Boot, Hibernate, and modern APIs.
        Perfect for enterprise systems, web services, and backend architectures.
      </p>
      <Link to="/" className="btn">Back to Services</Link>
    </section>
  );
};

export default JavaDevelopment;
