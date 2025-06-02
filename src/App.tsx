import { useState, useEffect } from 'react';
import './App.css';

// Components for each section
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PainPoints from './components/PainPoints';
import Solutions from './components/Solutions';
import CoreFeatures from './components/CoreFeatures';
import DemoSection from './components/DemoSection';
import Testimonials from './components/Testimonials';
import Roadmap from './components/Roadmap';
import InviteSection from './components/InviteSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <h2 className="loading-text">正在加载未来...<br />（或者至少是未来的PPT）</h2>
          <p className="loading-subtext">请稍候，我们的AI正在思考如何让您的API调用次数再创新高...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <PainPoints />
        <Solutions />
        <CoreFeatures />
        <DemoSection />
        <Testimonials />
        <Roadmap />
        <InviteSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
