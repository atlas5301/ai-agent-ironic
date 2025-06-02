import '../styles/PainPoints.css';

const PainPoints = () => {
  const painPoints = [
    {
      title: "会议太多？",
      description: "NNanus Xtreme Giga-Brain 能帮您自动回复\"收到，感谢\"，让您在摸鱼时也显得很忙！"
    },
    {
      title: "邮件如山？",
      description: "我们的AI能以99.9%的准确率将所有邮件标记为\"稍后处理\"（然后就没有然后了）！"
    },
    {
      title: "创意枯竭？",
      description: "NNanus Xtreme Giga-Brain 能为您生成成吨的\"行业洞察\"，内容保证与您在LinkedIn上看到的别无二致！"
    },
    {
      title: "老板不满意？",
      description: "我们的Agent可以生成一份长达50页的报告，用各种复杂图表和专业术语证明不是您的问题，是这个世界太复杂！"
    }
  ];

  return (
    <section className="pain-points-section" id="pain-points">
      <div className="container">
        <h2 className="section-title">还在为这些&quot;世纪难题&quot;烦恼吗？</h2>
        
        <div className="pain-points-grid">
          {painPoints.map((point, index) => (
            <div className="pain-point-card" key={index}>
              <div className="pain-point-icon">
                <span className="pain-point-number">{index + 1}</span>
              </div>
              <h3 className="pain-point-title">{point.title}</h3>
              <p className="pain-point-description">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
