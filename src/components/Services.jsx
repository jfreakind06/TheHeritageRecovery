import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {[
          {
            title: 'Foreclosure Funds Recovery',
            desc: ' Navigating foreclosure is challenging, but there’s hope for financial recovery. At The Heritage Recovery, we recognize the emotional strain it brings. Allow us to assist you in reclaiming any surplus funds following a foreclosure.'
          },
          {
            title: 'Tax Sale Funds Recovery',
            desc: ' Counties often don’t make extra efforts to find homeowners entitled to surplus funds, which may be retained if unclaimed. Don’t lose what’s yours. Contact The Heritage Recovery today, and we’ll ensure you receive the funds you’re rightfully owed.'
          },
          {
            title: 'Bankruptcy Funds Recovery',
            desc: ' Bankruptcy can be a challenging ordeal, but opportunities to recover funds may still exist. Our compassionate team at The Heritage Recovery is here to guide you through this tough time. We’ll diligently work to identify and secure any available funds, offering you relief and support every step of the way.'
          }
        ].map((service, i) => (
          <motion.div
            key={i}
            className="service-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
