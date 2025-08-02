import React from 'react';
import Header from './components/Header';
import './style.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { initScrollReveal } from './utils/scrollReveal';
import { Routes, Route } from 'react-router-dom';
import WebDevelopment from './pages/WebDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import JavaDevelopment from './pages/JavaDevelopment';

function App() {
    useEffect(() => {
    initScrollReveal();
  }, []);
  return (
    <>
    <Routes>
      <Route path='/' element={
      <>
    <Header />
    <Home />
     <About />
     <Services />
     <Portfolio />
     <Contact />
     <Footer />
     </>
      } />

      {/* service page */}
         <Route path="/web-development" element={<WebDevelopment />} />
       <Route path="/ui-ux" element={<UIUXDesign />} />
        <Route path="/java-development" element={<JavaDevelopment />} />
     </Routes>

    </>
  );
}

export default App;
