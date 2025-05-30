import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial">
        <motion.div
          className="testimonial"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>"The Heritage Recovery helped our family access funds we didn’t even know we were owed. Truly life-changing."</p>
          <span>- Alicia B.</span>
        </motion.div>
        </div>
        <div className="testimonial">
        <motion.div
          className="testimonial"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>"Their process was simple, transparent, and faster than expected. Highly recommend their team."</p>
          <span>- James W.</span>
          </motion.div>
        </div>
        <div className="testimonial">
        <motion.div
          className="testimonial"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>"Professional, empathetic, and extremely knowledgeable. A partner you can trust."</p>
          <span>- Dana M.</span>
        </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
