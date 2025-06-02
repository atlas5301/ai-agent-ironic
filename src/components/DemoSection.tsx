import { useState, useRef } from 'react';
import '../styles/DemoSection.css';

const DemoSection = () => {
  const [showVipMessage, setShowVipMessage] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  const handlePlayClick = () => {
    setShowVipMessage(true);
    
    // After showing the message, simulate a video playing after 3 seconds
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.innerHTML = `
          <div class="terminal-output">
            <div class="terminal-line">$ python run_demo.py</div>
            <div class="terminal-line">Initializing NNanus Xtreme Giga-Brain...</div>
            <div class="terminal-line">Loading pretrained models...</div>
            <div class="terminal-line">Connecting to API...</div>
            <div class="terminal-line">Hello World!</div>
            <div class="terminal-line success">任务完美完成！</div>
          </div>
        `;
      }
    }, 3000);
  };

  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <h2 className="section-title">眼见为实（如果你选择性失明的话）</h2>
        
        <div className="video-container">
          {showVipMessage ? (
            <div className="vip-message" ref={videoRef}>
              <h3>此功能仅对VVIP白金钻石星耀创世神级付费用户开放</h3>
              <p>正在为您播放演示版本...</p>
            </div>
          ) : (
            <div className="fake-video">
              <div className="play-button" onClick={handlePlayClick}>
                <span className="play-icon">▶</span>
              </div>
              <div className="video-overlay">
                <h3>NNanus Xtreme Giga-Brain 演示视频</h3>
                <p>点击播放，见证奇迹的时刻</p>
              </div>
            </div>
          )}
        </div>
        
        <p className="demo-disclaimer">
          "我们的Demo绝不造假，只是运行环境比较'特殊'。"
        </p>
        
        <div className="case-studies">
          <div className="case-study">
            <h3>案例1：自动生成周报</h3>
            <p>（实际效果：生成一份"本周工作：写周报"的周报）。</p>
          </div>
          
          <div className="case-study">
            <h3>案例2：智能市场分析</h3>
            <p>（实际效果：抓取百度热搜榜前十，并配上"市场趋势强劲"的结论）。</p>
          </div>
          
          <div className="case-study">
            <h3>案例3：个性化邮件营销</h3>
            <p>（实际效果：给所有联系人群发"亲爱的[姓名占位符]，我们有一个您不容错过的优惠！"）。</p>
          </div>
        </div>
        
        <p className="case-disclaimer">
          "以上案例仅在我们的首席'演示工程师'亲自操作，且天气晴朗、服务器心情愉悦、并且当天是水逆结束的第一天时，才有可能完美复现。"
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
