const bar = document.getElementById("progress");
const header = document.getElementById("header");

function updateScrollUI() {
  const h = document.documentElement;
  const scrollable = h.scrollHeight - h.clientHeight;
  const pct = scrollable > 0 ? (h.scrollTop / scrollable) * 100 : 0;

  bar.style.width = `${pct}%`;
  header.classList.toggle("scrolled", h.scrollTop > 8);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
window.addEventListener("load", updateScrollUI);
