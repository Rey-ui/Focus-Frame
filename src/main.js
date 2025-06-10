const burgerBtn = document.querySelector(".header-btn_burger");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
burgerBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});
modal.addEventListener("click", (e) => {
  console.log("click on modal");
  console.log("target:", e.target);
  console.log("currentTarget:", e.currentTarget);
  if (e.target === e.currentTarget) {
    modal.classList.remove("is-open");
  }
});
