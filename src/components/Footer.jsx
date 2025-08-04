import React from 'react';
import { FaAngleUp } from 'react-icons/fa'; // for the up arrow icon

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          <p>Copyright © 2025 by @sahilrajak | All Rights Reserved.</p>
        </div>
        <div className="footer-iconTop">
       <a href="#home"><FaAngleUp /></a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
