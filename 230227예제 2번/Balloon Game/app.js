let gallery = document.querySelector("#balloon-gallery");
let message = document.querySelector("#yay-no-balloons");
const balloons = document.querySelectorAll(".balloon");

// balloons.forEach((b) => {
//   b.addEventListener("mouseover", function (e) {
//     b.style.backgroundColor = "#ededed";
//     b.textContent = "PoP!";

// console.log( balloons.value.length)
// balloons.values
// console.log(b)
console.log(balloons);

function everyCallback(elm) {
  // (element) => {
  //   console.log(element.style.backgroundColor);
  //   element.style.backgroundColor === "rgb(237, 237, 237)";
  // }
}

balloons.forEach((b) => {
  console.log(b);
  b.addEventListener("mouseover", function (e) {
    b.style.backgroundColor = "#ededed";
    b.textContent = "PoP!";

    console.log(b);

    if (balloons.every(everyCallback)) {
      gallery.style.display = "none";
      message.style.display = "block";
    }
  });
});

console.log(balloons);
