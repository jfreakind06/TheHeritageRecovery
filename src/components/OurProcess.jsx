import React from 'react';
import '../styles/OurProcess.css';

// your SVG imports…
import researchIcon  from '../assets/icons/research.svg';
import contactIcon   from '../assets/icons/contact.svg';
import docsIcon      from '../assets/icons/docs.svg';
import attorneyIcon  from '../assets/icons/attorney.svg';
import payoutIcon    from '../assets/icons/payout.svg';

const steps = [
  { icon: researchIcon,  title: 'Government & Public Records Research', desc: ' We thoroughly examine public and government records to identify surplus funds from foreclosures, tax sales, or other sources.' },
  { icon: contactIcon,   title: 'Initial Contact with Homeowners',      desc: 'Upon discovering potential funds, we contact homeowners to notify them of the available funds and explain the recovery process.' },
  { icon: docsIcon,      title: 'Sending Contingency Fee Agreement Documents ',            desc: 'Once the homeowner agrees to move forward, we send them a contingency fee agreement via email or mail, detailing our terms and fee structure for their review and signature.' },
  { icon: attorneyIcon,  title: 'Case Assignment to Legal Expert ',              desc: 'After receiving the signed agreement, we assign the case to our skilled attorney specializing in surplus funds recovery, who handles the legal steps to process the claim efficiently.' },
  { icon: payoutIcon,    title: 'Disbursement of Proceeds',            desc: 'Once the surplus funds are recovered, we promptly and securely distribute the proceeds to the homeowner, ensuring they receive the funds they are entitled to.' },
];

export default function OurProcess() {
  return (
    <section className="our-process" id="process">
      <h2>Our Process</h2>

      {/* Top row: first 3 steps */}
      <div className="process-row top">
        {steps.slice(0, 3).map((s, i) => (
          <div className="step" key={i}>
            <div className="step-icon"><img src={s.icon} alt="" /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Bottom row: last 2 steps */}
      <div className="process-row bottom">
        {steps.slice(3).map((s, i) => (
          <div className="step" key={i + 3}>
            <div className="step-icon"><img src={s.icon} alt="" /></div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
