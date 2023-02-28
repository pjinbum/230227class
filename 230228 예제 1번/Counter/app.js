let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
console.log(btns);
console.log(value.value);

function colorr() {
  if (count < 0) {
    value.style.color = "red";
  } else if (count > 0) {
    value.style.color = "green";
  } else if ((count = 0)) {
    value.style.color = "black";
  }
}

btns.forEach(function (e) {
  // console.log(btns)

  console.log(e);
  e.addEventListener("click", function () {
    if (e == btns[0]) {
      // console.log(btns[0]);
      // console.log(value.value);
      console.log(value.value);
      // value.style.color = "red";
      count--;
      value.innerHTML = count;

      colorr();

      // if (count < 0) {
      //   value.style.color = "red";
      // } else if (count > 0) {
      //   value.style.color = "green";
      // } else if (count == 0) {
      //   value.style.color = "black";
      // }

      // if (e < 0) value.style.color = "green";
      // console.log(value.value);
    } else if (e == btns[1]) {
      // console.log(btns[1]);
      count = 0;
      value.innerHTML = count;
      value.style.color = "black";
    } else if (e == btns[2]) {
      console.log(btns[2]);

      count++;
      value.innerHTML = count;

      colorr();

      // if (count < 0) {
      //   value.style.color = "red";
      // } else if (count > 0) {
      //   value.style.color = "green";
      // } else if (count == 0) {
      //   value.style.color = "black";
      // }

      // value.style.color = "green";

      // console.log(value.value);
    }
  });
});
