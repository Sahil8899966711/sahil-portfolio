import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form action="https://formspree.io/f/mvgqbebw" method="POST">

    {/* Redirect after submit dont show the formspee page thanking send message */}
         <input type="hidden" name="_next" value="https://sahil-portfolio-gilt-one.vercel.app/thank-you.html" />


        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>

        <div className="input-box">
          <input type="tel" name="phone" placeholder="Mobile Number" />
          <input type="text" name="subject" placeholder="Email Subject" />
        </div>

        <textarea name="message" cols="30" rows="10" placeholder="Your Message" required></textarea><br />

        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
