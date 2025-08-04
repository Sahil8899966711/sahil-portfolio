import ScrollReveal from 'scrollreveal';

export const initScrollReveal = () => {
  ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-contact p, .about-content', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 200,
  });
};
