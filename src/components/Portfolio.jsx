import React from 'react';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src="/pexels-watch.jpg" alt="Watch Project" />
          <div className="portfolio-layer">
            <h4>Watch Web Design</h4>
            <p>
              A stylish and responsive website for a premium watch brand. Focused on elegant UI and mobile-friendly layout.
            </p>
            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="/e-commerce.jpg" alt="E-Commerce" />
          <div className="portfolio-layer">
            <h4>E-Commerce Website</h4>
            <p>
              Designed a fully functional e-commerce front-end with shopping cart, product filters, and checkout flow.
            </p>
            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src="school-mangement.jpg" alt="School System" />
          <div className="portfolio-layer">
            <h4>School Management System</h4>
            <p>
              A complete system for managing students, attendance, and results. Built with clean UI and scalable structure.
            </p>
            <a href="#"><i className="fa-solid fa-up-right-from-square"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
