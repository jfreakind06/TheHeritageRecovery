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
        <h1>Empowering Generations to Reclaim Their Legacy</h1>
        <p>We help families and businesses recover, protect, and grow unclaimed assets and wealth.</p>
        <a href="#contact" className="cta-button">Schedule a Free Consultation</a>
      </motion.div>
    </section>
  );
}

export default Hero;
