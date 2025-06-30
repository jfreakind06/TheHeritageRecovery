import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to The Heritage Recovery</h1>
        <p>We’re dedicated to helping you recover unclaimed money from foreclosures, tax sales, or bankruptcy proceedings. Our expert team provides clear guidance and personalized support to make claiming your surplus funds simple and stress-free.</p>
        <a href="#contact" className="cta-button">Schedule a Free Consultation</a>
      </motion.div>
    </section>
  );
}

export default Hero;
