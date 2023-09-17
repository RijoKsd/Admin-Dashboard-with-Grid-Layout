let dashboardIcon = document.querySelector(".large-icon");
let title = document.querySelectorAll(".title");
let starIcon = document.querySelectorAll(".star");

dashboardIcon.addEventListener("click", () => {
  title.forEach((item) => {
    item.classList.toggle("hidden");
  });
});

starIcon.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
