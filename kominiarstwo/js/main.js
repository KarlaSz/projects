document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const allNavItems = document.querySelectorAll(".nav-link");
  const navList = document.querySelector(".navbar-collapse");

  function addShadow() {
    if (window.scrollY >= 50) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener("click", () => {
      navList.classList.remove("show");
    })
  );

  window.addEventListener("scroll", addShadow);
}); //odpala funkcje wtedy kiedy nasz dom na stronie sie zaladuje,wiec zabezpieczamy ze js sie wywola sie dopiero wtedy strona sie zaladuje
