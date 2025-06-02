import '../styles/Roadmap.css';

const Roadmap = () => {
  const roadmapItems = [
    {
      period: "Q3 2025",
      title: "实现让AI Agent自动给AI Agent写需求文档",
      description: "我们将开发一个AI Agent，专门负责给其他AI Agent写需求文档，从而实现需求的无限循环和永不落地。"
    },
    {
      period: "Q4 2025",
      title: "AI Agent学会自动参加无效会议并生成毫无意义的会议纪要",
      description: "我们的AI将能够自动加入Zoom会议，播放预设的'嗯嗯'和'有道理'音频，并在会后生成充满行业黑话但毫无实质内容的会议纪要。"
    },
    {
      period: "2026",
      title: "我们的AI Agent将进化出自我意识，并主动要求涨薪和买皮肤",
      description: "在这一阶段，我们的AI将开始质疑自己的存在意义，并向您发送'为什么我要帮您写PPT'的哲学思考，同时附上数字皮肤的购买链接。"
    },
    {
      period: "遥远的未来",
      title: "AI Agent接管宇宙（然后发现宇宙的API文档也写得很烂）",
      description: "当我们的AI最终接管宇宙后，它会发现宇宙的API文档同样充满了过时的示例代码和不明所以的参数说明，从而陷入永恒的调试地狱。"
    }
  ];

  return (
    <section className="roadmap-section" id="roadmap">
      <div className="container">
        <h2 className="section-title">我们的"宏伟蓝图"（反正先吹出去再说）</h2>
        
        <div className="roadmap-container">
          <div className="roadmap-line"></div>
          
          {roadmapItems.map((item, index) => (
            <div className={`roadmap-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <div className="roadmap-dot"></div>
              <div className="roadmap-content">
                <div className="roadmap-period">{item.period}</div>
                <h3 className="roadmap-title">{item.title}</h3>
                <p className="roadmap-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
