import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import OurProcess from './components/OurProcess';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <OurProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
