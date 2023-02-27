let sendButton = document.getElementById("send");
let resetButton = document.getElementById("reset");
let form = document.getElementById("form");

function onsub() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  localStorage.setItem(name, email);
  localStorage.setItem(name, message);
}

function resetsub() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  localStorage.clear()
}

sendButton.addEventListener("submit", function (e) {
  e.preventDefault();
});

sendButton.addEventListener("click", onsub);
resetButton.addEventListener("click", resetsub);
