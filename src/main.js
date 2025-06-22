// import Toastify from "toastify-js";
const burgerBtn = document.querySelector(".header-btn_burger");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal");
// const form = document.querySelector(".sign-up-form");
// const inputElName = form.querySelector('input[name="name"]');
// const inputElEmail = form.querySelector('input[name="email"]');
// let formData = {};
burgerBtn.addEventListener("click", () => {
  modal.classList.add("is-open");
});
modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("is-open");
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   formData = { name: inputElName.value, email: inputElEmail.value };
//   if (formData.email === "" || formData.name === "") {
//     Toastify({
//       text: "Please fill in the form fields!",

//       duration: 3000,
//     }).showToast();
//     return;
//   } else {
//     Toastify({
//       text: "success, registration completed",

//       duration: 3000,
//     }).showToast();
//   }

//   console.log(formData);
// });
