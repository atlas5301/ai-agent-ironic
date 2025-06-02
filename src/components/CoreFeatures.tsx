import '../styles/CoreFeatures.css';

const CoreFeatures = () => {
  const features = [
    {
      icon: '🧠',
      title: '认知增强（伪）',
      description: '自动在您的报告中插入行业热门词汇，让您的文档看起来更"专业"。'
    },
    {
      icon: '🦾',
      title: '流程自动化（虚）',
      description: '将您手动操作Photoshop的步骤，完美"自动化"为需要手动启动的Python脚本。'
    },
    {
      icon: '✨',
      title: '奇迹生成（玄）',
      description: '我们的"演示专用版"Agent可以在特定条件下（例如：输入为"1+1"），给出"创造性"答案（例如："等于一扇窗"）。'
    },
    {
      icon: '🛡️',
      title: '绝对安全（吹）',
      description: '您的数据绝对安全，因为我们甚至都不知道它存在哪里，怎么用。'
    },
    {
      icon: '👥',
      title: '超强协作（空）',
      description: '支持"多Agent"协同工作（指您需要购买多个授权，然后在不同窗口手动切换）。'
    }
  ];

  return (
    <section className="core-features-section" id="features">
      <div className="container">
        <h2 className="section-title">探索 NNanus Xtreme Giga-Brain 的"超能力"</h2>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
