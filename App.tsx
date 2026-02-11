
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { About } from './components/About';
import { Services } from './components/Services';
import { QuickInfo } from './components/QuickInfo';
import { ProcessSteps } from './components/ProcessSteps';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { Stats } from './components/Stats';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <QuickInfo />
        <ProcessSteps />
        <Testimonials />
        <WhyChooseUs />
        <Stats />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
