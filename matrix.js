const pipa = document.getElementById("matrix-pipa");
const ctx = pipa.getContext("2d");

pipa.width = window.innerWidth;
pipa.height = window.innerHeight;

const chars = "01";
const fontSize = 14;
const columns = pipa.width / fontSize;

const drops = [];
// set random negative start positions
for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * -100;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(5, 5, 5, 0.05)";
  ctx.fillRect(0, 0, pipa.width, pipa.height);

  ctx.fillStyle = "#00ff41";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // reset drop randomly to top
    if (drops[i] * fontSize > pipa.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
// speed
setInterval(drawMatrix, 80);

// handle resize
window.addEventListener("resize", () => {
  pipa.width = window.innerWidth;
  pipa.height = window.innerHeight;
});
