import { useEffect, useRef } from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    
    // Create particles
    const particlesContainer = particlesRef.current;
    const colors = ['#6e56cf', '#9b6dff', '#10b981', '#f97316'];
    
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random properties
      const size = Math.random() * 20 + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Position
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      
      // Animation delay
      const delay = Math.random() * 5;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = color;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      
      particlesContainer.appendChild(particle);
    }
    
    return () => {
      while (particlesContainer.firstChild) {
        particlesContainer.removeChild(particlesContainer.firstChild);
      }
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="particles-container" ref={particlesRef}></div>
      <div className="overlay"></div>
      <div className="container hero-container">
        <h1 className="hero-title">
          <span className="metallic-text">NNanus XTREME GIGA-BRAIN:</span> 
          <span className="hero-subtitle">重新定义"工作"——让您的API调用次数再创新高！</span>
        </h1>
        <p className="hero-description">
          告别重复劳动（指手动运行我们的脚本），拥抱下一代"自主"智能体（指需要您不断点击"下一步"）。
          我们不是AGI，我们是Always Getting Investment（总能拿到投资）！
        </p>
        <button className="btn btn-primary btn-large glow">
          立即体验未来（的付费墙）
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
