import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import TestimonialsSection from './components/TestimonialsSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ServicesSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;