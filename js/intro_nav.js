const title = document.querySelectorAll(".nav_title");
function titleClick() {
  title.forEach((e) => {
    e.classList.remove("click");
  });
  event.target.classList.add("click");
}
title.forEach((e) => {
  e.addEventListener("click", titleClick);
});
