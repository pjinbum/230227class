let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");

increase.onclick = () => {
  const current = parseInt(value.innerText, 10);
  value.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(value.innerText, 10);
  value.innerText = current - 1;
};

reset.onclick = () => {
  value.innerText = 0;
}
