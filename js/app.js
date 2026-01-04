import { fetchSystemStats } from './monitor.js';
import { updateUI, initChart } from './ui.js';

const chart = initChart();

const runDashboard = async () => {
    // Infinite loop لمحاكاة الـ Real-time
    while (true) {
        try {
            const stats = await fetchSystemStats();
            
            // تحديث الواجهة
            updateUI(stats);

            // تحديث الرسم البياني
            chart.data.labels.push(stats.timestamp);
            chart.data.datasets[0].data.push(stats.cpu);
            
            // الحفاظ على آخر 10 نقاط فقط في الرسم
            if (chart.data.labels.length > 10) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
            }
            chart.update();

        } catch (error) {
            console.error("Monitor Error:", error);
            break; // وقف لو حصل مشكلة كارثية
        }
    }
};

// ابدأ التشغيل
runDashboard();