const canvas = document.getElementById('runicMatrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const runicChars = Object.values(runicMap);
const columns = canvas.width / 20;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function drawRunicMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = '20px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = runicChars[Math.floor(Math.random() * runicChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawRunicMatrix, 50);