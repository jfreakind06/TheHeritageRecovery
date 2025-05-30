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
            title: 'Unclaimed Asset Recovery',
            desc: 'We locate and reclaim lost or overlooked funds for individuals and families.'
          },
          {
            title: 'Estate & Probate Assistance',
            desc: 'Support for families navigating financial transitions after a loved one’s passing.'
          },
          {
            title: 'Wealth Research & Claims',
            desc: 'Detailed investigation into hidden or forgotten entitlements and inheritance.'
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
