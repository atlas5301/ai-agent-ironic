import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <span className="logo-text">NNanus <span className="logo-highlight">XG</span></span>
        </div>
        
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="active">
            <a href="#" title="当前页面">首页</a>
          </li>
          <li>
            <a href="#" title="的PPT">产品</a>
          </li>
          <li>
            <a href="#" title="画的饼">解决方案</a>
          </li>
          <li>
            <a href="#" title="黑箱">技术</a>
          </li>
          <li>
            <a href="#" title="一群梦想家和PPT设计师">关于我们</a>
          </li>
          <li>
            <a href="#" title="心灵鸡汤和行业黑话">博客</a>
          </li>
          <li>
            <a href="#" title="成为下一个画饼大师">加入我们</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
