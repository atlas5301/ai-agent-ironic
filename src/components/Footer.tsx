import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-copyright">
            © 2025-∞ NNanus Xtreme Giga-Brain (及其背后神秘的风险投资公司)。保留所有权利（包括随时跑路的权利）。
          </div>
          
          <div className="footer-disclaimers">
            <p>"本网站内容纯属虚构，如有雷同，纯属不幸。"</p>
            <p>"最终解释权？我们自己都没搞明白。"</p>
            <p>"AI伦理声明：我们承诺不首先使用AI毁灭人类（除非能融到更多钱）。"</p>
          </div>
          
          <div className="footer-links">
            <a href="#" className="footer-link">隐私政策（没有隐私）</a>
            <a href="#" className="footer-link">服务条款（没有服务）</a>
            <a href="#" className="footer-link">联系我们（没有回复）</a>
          </div>
          
          <div className="footer-easter-egg">
            <span className="nano-text">如果您能看到这段文字，说明您已经被我们的AI标记为"过度认真的用户"。恭喜！</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
