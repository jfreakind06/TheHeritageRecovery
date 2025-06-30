import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <motion.div
        className="contact-wrapper"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>Schedule a Free Consultation</h2>
        <p className="contact-intro">Complete the form below and a member of our team will reach out to you shortly.</p>
          <form
          className='contact-form'
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you"    
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <input type="email" name="_replyto" placeholder="Your Email" required />
            <input type="text"  name="name"    placeholder="Full Name"  required />
            <input type="tel" name="phone" placeholder="Phone Number" required/>
            <textarea name="message" rows="5" placeholder="How can we help you?" required></textarea>
            <button type="submit">Submit</button>
          </form>

      </motion.div>
    </section>
  );
}

export default Contact;
