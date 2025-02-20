const inputdate = document.querySelector(".input-date");
const button = document.querySelector(".button");
const age = document.querySelector(".your-age");

button.addEventListener("click", () => {
  const birhDate = new Date(inputdate.value);
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birhDate.getFullYear();
});
