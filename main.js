/// Отображение футера и скрытие при начальной и конечной точки прокрутки

const footerElement = document.querySelector("footer");
let last_scroll = 0;
let isScrolling = false;

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("scroll", function () {
    const currentScroll = window.scrollY;
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const isBottom = scrollTop + windowHeight >= documentHeight - 5;

    if (isBottom) {
      footerElement.classList.remove("scrolled");
    } else if (last_scroll < currentScroll && currentScroll > 100) {
      footerElement.classList.add("scrolled");
    } else if (currentScroll < last_scroll) {
      footerElement.classList.remove("scrolled");
    } else if (currentScroll === 0) {
      footerElement.classList.remove("scrolled");
    }
    last_scroll = currentScroll;
  });
});

///Кнопка темы

const themeBtn = document.querySelector(".theme-btn");
const body = document.querySelector("body");

function updateTheme(isDark) {
  if (isDark) {
    themeBtn.classList.add("active");
    body.classList.add("black");
  } else {
    themeBtn.classList.remove("active");
    body.classList.remove("black");
  }
}

const savedTheme = localStorage.getItem("theme");
updateTheme(savedTheme === "dark");

themeBtn.addEventListener("click", function () {
  const isDark = !body.classList.contains("black");
  updateTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
