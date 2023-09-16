let dashboardIcon = document.querySelector(".large-icon");
let title = document.querySelectorAll(".title");

dashboardIcon.addEventListener("click", () => {
  title.forEach((item) => {
    item.classList.toggle("hidden");
  });
});
