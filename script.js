// Ambil tombol
const backToTopBtn = document.getElementById("backToTop");

// Saat user scroll 100px kebawah, tampilkan tombol
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Saat tombol diklik, kembali ke atas
backToTopBtn.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const headerContainer = document.querySelector("header .container");
const clock = document.createElement("div");
clock.id = "digitalClock";
clock.style.textAlign = "center";
clock.style.marginTop = "10px";
clock.style.fontWeight = "bold";
headerContainer.appendChild(clock);

function updateClock() {
  const now = new Date();
  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  let s = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `Jam: ${h}:${m}:${s}`;
}
setInterval(updateClock, 1000);
updateClock();

const darkModeBtn = document.createElement("button");
darkModeBtn.textContent = "Mode Gelap";
darkModeBtn.style.marginTop = "10px";
darkModeBtn.style.padding = "8px 12px";
darkModeBtn.style.cursor = "pointer";
darkModeBtn.style.border = "none";
darkModeBtn.style.background = "#ffcc00";
darkModeBtn.style.color = "#000";
darkModeBtn.style.borderRadius = "5px";
darkModeBtn.style.fontWeight = "bold";

document.querySelector("header .container").appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  darkModeBtn.textContent = document.body.classList.contains("dark-mode") 
    ? "Mode Terang" 
    : "Mode Gelap";
});

// ===== Fitur 3: Running Text =====
const runningText = document.createElement("marquee");
runningText.textContent = "Selamat datang di Website Resmi SMK Negeri 1 Riang - Sekolah Vokasi Berkualitas!";
runningText.style.background = "#ffcc00";
runningText.style.color = "#000";
runningText.style.padding = "8px";
runningText.style.fontWeight = "bold";

// Taruh di paling atas sebelum header
document.body.insertBefore(runningText, document.body.firstChild);
