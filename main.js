// const moreBtn = document.getElementById("more-btn");

// const mySvg = document.querySelector(".my-svg");

// const startPath =
//   "M0 0H459V46L416.856 64.6826C381.248 80.4672 341.482 84.2764 303.526 75.5383L269.153 67.6252C238.899 60.6602 207.358 61.6386 177.594 70.4652L129.031 84.8665C95.7234 94.7441 60.2685 94.7715 26.9452 84.9454L0 77V0Z";

// const endPath =
//   "M0 0H459V46L412.968 239.845C399.415 296.917 320.453 302.634 298.82 248.109L266.994 167.889C248.809 122.052 186.163 116.506 160.207 158.435L144.007 184.604C117.829 226.892 54.5209 220.799 36.8885 174.293L0 77V0Z";

// moreBtn.addEventListener("click", () => {
//   document.querySelector(".header").classList.toggle("header--opened");
//   const timeline = anime.timeline({
//     duration: 10000,
//     easing: "easeOutExpo"
//   });

//   timeline.add({
//     targets: ".pr",
//     d: [
//       {
//         value: endPath
//       }
//     ]
//   });
// });
const modeTrigger = document.getElementById("trigger");
const doc = document.documentElement;

trigger.addEventListener("click", () => {
  if (trigger.checked === true) {
    trans();
    doc.setAttribute("data-theme", "dark");
  } else {
    trans();
    doc.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  doc.classList.add("transition");
  window.setTimeout(() => {
    doc.classList.remove("transition");
  }, 750);
};
