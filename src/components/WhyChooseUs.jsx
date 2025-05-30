import React from 'react';
import '../styles/WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="reasons-grid">
        <div className="reason">
          <h3>Personalized Guidance</h3>
          <p>We tailor every recovery and education plan to your family's specific needs and legacy goals.</p>
        </div>
        <div className="reason">
          <h3>Experienced Advisors</h3>
          <p>Our team brings decades of combined experience in finance, recovery, and generational wealth.</p>
        </div>
        <div className="reason">
          <h3>Transparent Process</h3>
          <p>No guesswork. We walk you through every step of the asset recovery and planning process.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
