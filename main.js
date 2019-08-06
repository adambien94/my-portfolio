const modeTrigger = document.getElementById("trigger");
const rootDoc = document.documentElement;
const themeColorMeta = document.querySelector("meta[name=theme-color]");

trigger.addEventListener("click", () => {
  if (trigger.checked === true) {
    trans();
    rootDoc.setAttribute("data-theme", "dark");
    themeColorMeta.setAttribute("content", "#1f2428");
  } else {
    trans();
    rootDoc.setAttribute("data-theme", "light");
    themeColorMeta.setAttribute("content", "#fcfcfc");
  }
});

let trans = () => {
  rootDoc.classList.add("transition");
  window.setTimeout(() => {
    rootDoc.classList.remove("transition");
  }, 750);
};

// const links = document.querySelectorAll(".nav__item__link");

// for (const link of links) {
//   link.addEventListener("click", () => {
//     activeLink(link.hash);
//   });
// }

// function activeLink(target) {
//   for (const link of links) {
//     if (link.hash === target) {
//       link.classList.add("nav__item__link--active");
//     } else {
//       link.classList.remove("nav__item__link--active");
//     }
//   }
// }
