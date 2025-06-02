import { useEffect, useRef } from 'react';
import '../styles/Solutions.css';

const Solutions = () => {
  const flowchartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a complex flowchart animation
    const canvas = document.createElement('canvas');
    if (!flowchartRef.current) return;
    
    flowchartRef.current.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      const container = flowchartRef.current;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = 400;
      
      // Redraw on resize
      drawFlowchart();
    };
    
    // Initial size
    resizeCanvas();
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Draw the overly complex flowchart
    function drawFlowchart() {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set styles
      ctx.lineWidth = 2;
      ctx.font = '12px Inter, sans-serif';
      
      // Colors
      const colors = {
        box: '#6e56cf',
        line: '#9b6dff',
        text: '#ffffff',
        highlight: '#f97316'
      };
      
      // Draw boxes and connections
      const boxWidth = 120;
      const boxHeight = 60;
      const boxes = [];
      
      // Create a grid of boxes
      const cols = 5;
      const rows = 3;
      const startX = (canvas.width - (cols * boxWidth + (cols - 1) * 50)) / 2;
      const startY = 30;
      
      // Create boxes
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = startX + col * (boxWidth + 50);
          const y = startY + row * (boxHeight + 70);
          
          boxes.push({ x, y, width: boxWidth, height: boxHeight });
        }
      }
      
      // Draw random connections between boxes
      ctx.strokeStyle = colors.line;
      
      for (let i = 0; i < boxes.length; i++) {
        const box = boxes[i];
        
        // Connect to 1-3 random boxes
        const connections = Math.floor(Math.random() * 3) + 1;
        
        for (let j = 0; j < connections; j++) {
          // Pick a random target box
          const targetIndex = Math.floor(Math.random() * boxes.length);
          if (targetIndex === i) continue; // Skip self-connections
          
          const target = boxes[targetIndex];
          
          // Draw connection
          ctx.beginPath();
          ctx.moveTo(box.x + box.width / 2, box.y + box.height);
          
          // Create a bezier curve
          const controlX1 = box.x + box.width / 2;
          const controlY1 = box.y + box.height + 20;
          const controlX2 = target.x + target.width / 2;
          const controlY2 = target.y - 20;
          
          ctx.bezierCurveTo(
            controlX1, controlY1,
            controlX2, controlY2,
            target.x + target.width / 2, target.y
          );
          
          ctx.stroke();
          
          // Draw arrow at the end
          const arrowSize = 8;
          const angle = Math.atan2(target.y - controlY2, target.x + target.width / 2 - controlX2);
          
          ctx.beginPath();
          ctx.moveTo(target.x + target.width / 2, target.y);
          ctx.lineTo(
            target.x + target.width / 2 - arrowSize * Math.cos(angle - Math.PI / 6),
            target.y - arrowSize * Math.sin(angle - Math.PI / 6)
          );
          ctx.lineTo(
            target.x + target.width / 2 - arrowSize * Math.cos(angle + Math.PI / 6),
            target.y - arrowSize * Math.sin(angle + Math.PI / 6)
          );
          ctx.closePath();
          ctx.fillStyle = colors.line;
          ctx.fill();
        }
      }
      
      // Draw boxes with buzzwords
      const buzzwords = [
        '深度学习', 'AI引擎', '神经网络', '量子计算',
        '区块链', '大数据', '云计算', 'API网关',
        '微服务', '边缘计算', 'DevOps', '自动化',
        'MLOps', '数据湖', '知识图谱'
      ];
      
      boxes.forEach((box, index) => {
        // Box
        ctx.fillStyle = colors.box;
        ctx.fillRect(box.x, box.y, box.width, box.height);
        
        // Text
        ctx.fillStyle = colors.text;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        const term = buzzwords[index % buzzwords.length];
        ctx.fillText(term, box.x + box.width / 2, box.y + box.height / 2);
      });
    }
    
    // Initial draw
    drawFlowchart();
    
    // Animation
    let animationFrame: number;
    const animate = () => {
      drawFlowchart();
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
      if (flowchartRef.current && flowchartRef.current.contains(canvas)) {
        flowchartRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <h2 className="section-title">隆重介绍：NNANUS XTREME GIGA-BRAIN - 您通往"看起来很努力"的捷径！</h2>
        
        <div className="flowchart-container" ref={flowchartRef}>
          {/* Canvas will be inserted here */}
        </div>
        
        <div className="solutions-content">
          <p className="solutions-description">
            NNanus Xtreme Giga-Brain 是一款划时代的...呃..."多功能任务处理套件"。它利用"专有算法"（if-else语句）、"深度神经网络"（嵌套循环）和"大数据分析"（SELECT * FROM table），为您提供前所未有的..."操作体验"。
          </p>
          
          <div className="solutions-features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span className="feature-text">"一键"部署（需要100个前置步骤和3天配置）</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧠</span>
              <span className="feature-text">"自主"决策（基于您预设的500条规则）</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔄</span>
              <span className="feature-text">"无缝"集成（只要您愿意为每个API接口单独付费）</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📈</span>
              <span className="feature-text">"持续"学习（指不断收集您的数据，用于我们的下一轮融资PPT）</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
