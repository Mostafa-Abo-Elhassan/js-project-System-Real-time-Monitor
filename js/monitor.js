// محاكاة لـ Background Service بتجيب بيانات
export const fetchSystemStats = async () => {
    // محاكاة Latency الشبكة
    await new Promise(resolve => setTimeout(resolve, 800));

    return {
        cpu: Math.floor(Math.random() * 100),
        requests: Math.floor(Math.random() * 1000) + 100,
        memory: {
            used: (Math.random() * 4 + 8).toFixed(1), // بين 8 لـ 12 جيجا
            total: 16
        },
        timestamp: new Date().toLocaleTimeString()
    };
};