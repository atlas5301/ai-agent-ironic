import { useState } from 'react';
import '../styles/InviteSection.css';

const InviteSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="invite-section" id="invite">
      <div className="container">
        <div className="invite-content">
          <h2 className="invite-title">加入这场认知革命！或者至少，加入我们的等候名单！</h2>
          
          {!submitted ? (
            <>
              <p className="invite-description">
                <span className="hard-to-read">
                  最新内部消息：NNanus Xtreme Giga-Brain的邀请码在火星地下黑市已被炒至9,999,999宇宙信用点！足以买下一颗小行星（的命名权）！这再次证明了我们产品的'超凡脱俗的价值主张'！
                </span>
              </p>
              
              <form className="invite-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">请输入您的灵魂绑定邮箱，获取那虚无缥缈的邀请码：</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="your.soul@eternity.universe" 
                    required 
                  />
                </div>
                
                <button type="submit" className="btn btn-primary btn-large">
                  提交并出卖未来十年的数字生活隐私
                </button>
                
                <p className="waiting-info">
                  当前已有 1,000,000,000 位来自不同时间线的用户在您前方排队。为了彰显每一位用户的尊贵与独特，我们承诺每个世纪随机抽取1位幸运儿发放内测邀请码（中奖者需自行承担时间旅行费用）。
                </p>
                
                <p className="tiny-text">
                  提交邮箱即表示您同意我们用您的邮箱注册所有已知的垃圾邮件服务，并授权我们将您的个人信息以'AI训练数据包'的形式出售给至少100家合作伙伴（包括但不限于算命网站、生发产品推销商和外星人联络处）。我们保留对'邀请'、'码'以及'用户'的最终解释权，解释过程可能涉及量子力学和薛定谔的猫。
                </p>
              </form>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">🎉</div>
              <h3>恭喜！您已成功加入等待队列！</h3>
              <p>您的位置：第1,000,000,001位</p>
              <p>预计等待时间：∞ - 1天</p>
              <p className="micro-text">（减去的1天是我们的AI算法自信地预测您可能在等待过程中忘记这件事）</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InviteSection;
