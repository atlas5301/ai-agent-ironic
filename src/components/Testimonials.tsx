import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "太神了！用了NNanus XG，我司的API调用成本上涨了300%，老板以为我们业务量暴增，给我升职加薪了！",
      author: "张三",
      title: "某\"不愿透露公司名的\"初创公司CEO（首席执行官兼唯一员工）"
    },
    {
      quote: "以前我需要花5分钟写一个for循环，现在我只需要花50分钟配置NNanus XG，然后它用一个for循环帮我搞定！效率'提升'肉眼可见！",
      author: "李四",
      title: "资深\"复制粘贴\"工程师"
    },
    {
      quote: "我们的投资人看了NNanus XG的演示后，激动地表示'看不懂，但大受震撼'，当场追加了投资！",
      author: "王五",
      title: "某\"元宇宙殡葬服务\"项目创始人"
    }
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <h2 className="section-title">听听那些&quot;不存在的&quot;早期用户怎么说</h2>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote-icon">&quot;</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-title">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
