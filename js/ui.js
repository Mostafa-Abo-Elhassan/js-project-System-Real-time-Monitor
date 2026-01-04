export const updateUI = (data) => {
    // 1. Destructuring للـ Nested Object
    const { cpu, requests, memory: { used, total } } = data;

    // 2. تحديث النصوص باستخدام Template Literals
    document.getElementById('cpu-value').innerText = `${cpu}%`;
    document.getElementById('req-value').innerText = requests;
    document.getElementById('mem-value').innerText = `${used} / ${total} GB`;

    // 3. تغيير لون الـ CPU لو زاد عن 80% (System Health Logic)
    const cpuCard = document.getElementById('cpu-value');
    cpuCard.style.color = cpu > 80 ? '#ff4d4d' : '#00ff88';
};

// إعداد الـ Chart.js
export const initChart = () => {
    const ctx = document.getElementById('loadChart').getContext('2d');
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'CPU Load %',
                data: [],
                borderColor: '#0078d4',
                tension: 0.4
            }]
        },
        options: { responsive: true }
    });
};