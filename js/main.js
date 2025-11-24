// ===== ハンバーガーメニューの開閉 =====
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("open");
  });
}

// ===== スクロール時のフェードイン（必要な人だけ使う） =====
const fadeEls = document.querySelectorAll(".fade");
if (fadeEls.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  });
  fadeEls.forEach(el => observer.observe(el));
}

// ===== ヘッダーの縮小エフェクト =====
window.addEventListener("scroll", () => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add("shrink");
  } else {
    header.classList.remove("shrink");
  }
});

// ===== ▼▼▼ ここからヘッダーバリアント切替JS追記 ▼▼▼ =====
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const sections = ['hero', 'reason', 'services', 'about']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const setVariant = () => {
    let current = 'hero';
    let topMin = Infinity;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top >= -200 && rect.top < topMin) {
        topMin = rect.top;
        current = sec.id;
      }
    });
    header.dataset.variant = current;
  };

  setVariant();
  window.addEventListener('scroll', setVariant, { passive: true });
  window.addEventListener('resize', setVariant);
})();
// ===== ▲▲▲ ここまでヘッダーバリアント切替JS追記 ▲▲▲ =====


// ===== 以下、各担当の追記スペース =====

const slides = document.querySelectorAll('.slides .slide');
let index = 0;

function changeSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(changeSlide, 4000); 












