//declaring variables
const navbar = document.querySelector(".nav");
const btn = document.querySelector("#tbtn");
let open = false;
const box = function () {
  open ? (navbar.style.minHeight = "10vh") : (navbar.style.minHeight = "100vh");
};
btn.addEventListener("click", function () {
  box();
  open = !open;
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && flag) box();
  // console.log(e.key);
});
