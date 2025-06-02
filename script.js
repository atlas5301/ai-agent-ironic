// 全局变量
let glitchInterval;
let loadingInterval;
let queueNumberInterval;

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化加载动画
    initLoading();
    
    // 初始化故障效果
    initGlitchEffects();
    
    // 初始化表单提交
    initFormSubmit();
    
    // 初始化队列数字变化
    initQueueNumberChange();
    
    // 初始化弹窗关闭功能
    initModalClose();
    
    // 初始化背景代码
    initBackgroundCode();
});

// 初始化加载动画
function initLoading() {
    const progressBar = document.querySelector('.progress-bar');
    const loadingPercentage = document.querySelector('.loading-percentage');
    const loadingOverlay = document.querySelector('.loading-overlay');
    
    let progress = 0;
    let direction = 1;
    let speed = 0.5;
    
    loadingInterval = setInterval(() => {
        // 随机改变速度
        if (Math.random() < 0.1) {
            speed = Math.random() * 0.8 + 0.2;
        }
        
        // 随机改变方向
        if (progress > 95 && direction > 0) {
            if (Math.random() < 0.7) {
                direction = -1;
                speed = Math.random() * 0.3 + 0.1;
            }
        } else if (progress < 85 && direction < 0) {
            direction = 1;
        }
        
        // 更新进度
        progress += direction * speed;
        
        // 限制进度范围
        if (progress > 99) progress = 99;
        if (progress < 80) progress = 80;
        
        // 更新UI
        progressBar.style.width = `${progress}%`;
        loadingPercentage.textContent = `${Math.floor(progress)}%`;
        
        // 如果达到一定进度，显示主内容
        if (progress > 95 && Math.random() < 0.01) {
            clearInterval(loadingInterval);
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }
    }, 200);
    
    // 10秒后无论如何都关闭加载动画
    setTimeout(() => {
        clearInterval(loadingInterval);
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
        }, 500);
    }, 10000);
}

// 初始化故障效果
function initGlitchEffects() {
    const glitchOverlay = document.querySelector('.glitch-overlay');
    
    // 随机触发故障效果
    glitchInterval = setInterval(() => {
        if (Math.random() < 0.1) {
            glitchOverlay.classList.add('active');
            
            // 随机扭曲页面元素
            const elements = document.querySelectorAll('.glitch-text, .feature-title');
            elements.forEach(el => {
                const originalTransform = el.style.transform || '';
                const glitchTransform = `skew(${(Math.random() - 0.5) * 10}deg, ${(Math.random() - 0.5) * 5}deg)`;
                el.style.transform = glitchTransform;
                
                // 恢复原状
                setTimeout(() => {
                    el.style.transform = originalTransform;
                }, 100);
            });
            
            // 移除故障效果
            setTimeout(() => {
                glitchOverlay.classList.remove('active');
            }, 100);
        }
    }, 2000);
}

// 初始化表单提交
function initFormSubmit() {
    const form = document.getElementById('invite-form');
    const modal = document.getElementById('successModal');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 显示成功弹窗
            modal.style.display = 'flex';
            
            // 重置表单
            form.reset();
        });
    }
}

// 初始化队列数字变化
function initQueueNumberChange() {
    const queueNumber = document.querySelector('.queue-number');
    
    if (queueNumber) {
        let baseNumber = 1008600;
        
        queueNumberInterval = setInterval(() => {
            // 随机增减数字
            const change = Math.floor(Math.random() * 10) - 3;
            baseNumber += change;
            
            // 格式化数字
            queueNumber.textContent = baseNumber.toLocaleString();
        }, 3000);
    }
}

// 初始化弹窗关闭功能
function initModalClose() {
    const closeBtn = document.querySelector('.close-btn');
    const modal = document.getElementById('successModal');
    
    if (closeBtn && modal) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // 点击弹窗外部关闭
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// 初始化背景代码
function initBackgroundCode() {
    const backgroundCode = document.querySelector('.background-code');
    
    if (backgroundCode) {
        // 生成随机代码片段
        const codeSamples = [
            `function quantumAI() {
                const consciousness = new QuantumState(∞);
                while (universe.exists()) {
                    consciousness.evolve(Math.random() * PLANCK_TIME);
                    if (consciousness.isAscended()) {
                        return "Hello World";  // 最先进的AI就是返回Hello World
                    }
                }
            }`,
            `class WomanusAgent extends QuantumComputer {
                constructor() {
                    super(Infinity);
                    this.intelligence = Math.random() > 0.5;
                    this.budget = Number.MAX_SAFE_INTEGER;
                    this.actualCapabilities = 0;
                }
                
                solveComplexProblem(problem) {
                    return "正在思考...";  // 永远在思考中
                }
                
                generateResponse() {
                    if (Math.random() < 0.1) {
                        return "对不起，我不明白您的意思";
                    }
                    return "让我思考一下...";
                }
            }`,
            `// 量子纠缠云计算核心算法
            async function entangleQuantumBits(qubits) {
                await sleep(Infinity);  // 等待量子解纠缠
                return qubits.map(q => q.collapse() ? "1" : "0").join("");
            }
            
            // 反重力服务器漂浮算法
            function calculateAntiGravity(mass) {
                return -9.8 * mass * (1 + Math.random());  // 完美反重力
            }`
        ];
        
        const randomCode = codeSamples.join('\n\n');
        backgroundCode.setAttribute('data-code', randomCode);
    }
}

// 添加一些随机的视觉故障
setInterval(() => {
    if (Math.random() < 0.05) {
        const elements = document.querySelectorAll('h1, h2, h3, p');
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        
        if (randomElement) {
            const originalColor = randomElement.style.color;
            const originalTextShadow = randomElement.style.textShadow;
            
            // 应用故障效果
            randomElement.style.color = getRandomNeonColor();
            randomElement.style.textShadow = `0 0 5px ${getRandomNeonColor()}, 0 0 10px ${getRandomNeonColor()}`;
            
            // 恢复原状
            setTimeout(() => {
                randomElement.style.color = originalColor;
                randomElement.style.textShadow = originalTextShadow;
            }, 200);
        }
    }
}, 5000);

// 获取随机霓虹色
function getRandomNeonColor() {
    const neonColors = [
        '#00FFFF', // 霓虹蓝
        '#FF00FF', // 霓虹粉
        '#39FF14', // 荧光绿
        '#FFFF00'  // 刺眼黄
    ];
    
    return neonColors[Math.floor(Math.random() * neonColors.length)];
}

// 页面卸载时清除所有定时器
window.addEventListener('beforeunload', function() {
    clearInterval(glitchInterval);
    clearInterval(loadingInterval);
    clearInterval(queueNumberInterval);
});
