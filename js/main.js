// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== ハンバーガーメニューの開閉 =====
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("active"); // スライドメニューのON/OFF
    menuBtn.classList.toggle("open", isOpen);      // 三本線 ⇔ ×
  });

  // メニュー内リンクを押したら閉じる
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      menuBtn.classList.remove("open");
    });
  });

  // ===== ヘッダー縮小（必要なら残す） =====
  const header = document.querySelector(".site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});


// ===== 以下、各担当の追記スペース =====

const slides = document.querySelectorAll('.slides .slide');
let index = 0;

function changeSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

setInterval(changeSlide, 4000); 












