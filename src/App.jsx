import React from 'react';
import Navbar from './assets/components/Navbar';
import Hero from './assets/components/Hero';
import Cta from './assets/components/Cta';
import Testimonials from './assets/components/Testimonials';
import Featured from './assets/components/Featured';
import OurTeam from './assets/components/OurTeam';
import Footer from './assets/components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-900 px-4 sm:px-6 md:px-10 lg:px-20">
      <Navbar />
      <Hero />
      <Featured />
      <Cta />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
