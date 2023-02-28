const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    console.log(inputs[0]);
    // input.removeAttribute("disabled", "");

    // console.log(nextInput);

    if (input.value > 0 && input.value < 10 && nextInput) {
      console.log(input.value);
      if ((nextInput.hasAttribute = true)) {
        nextInput.removeAttribute("disabled");
      }
      nextInput.focus();
    }

    // ----------------------------------------------------------

    if (
      inputs[0].value > 0 &&
      inputs[1].value > 0 &&
      inputs[2].value > 0 &&
      inputs[3].value > 0
    ) {
      button.style.backgroundColor = "red";
    } else {
      button.style.backgroundColor = "blue";
    }

    // ----------------------------------------------------------------------

    if (e.key === "Backspace") {
      console.dir(e);
      inputs.forEach((input, index2) => {
        //prevInput.setAttribute("disabled");
        if (prevInput) {
          prevInput.focus();
          // prevInput.setAttribute('disabled' , true);
        }
      });
    }
  });
});

window.addEventListener("load", () => inputs[0].focus());

// nextInput.removeAttribute()
// nextInput.setAttribute()
// nextInput.hasAttribute()
// nextInput.focus()

//내용이 적어졌을때 커서가 다음 인풋으로 넘어감
// 모든 인풋테그에 값이 들어갔을때 버튼 활성화
//백스페이스 눌렀을때 커서가 이전것으로 넘어감

//length -1 : 길이의 언제나 마지막
