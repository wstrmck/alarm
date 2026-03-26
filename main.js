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
