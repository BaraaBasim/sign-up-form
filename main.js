document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password").value;
  let confPassword = document.querySelector("confPassword").value;
  let error = document.querySelector("#error");

  if (password === "" && confPassword === "") {
    error.innerText = "*passwords do not match";
  } else if (password === confPassword) {
    error.innerText = "";
  }
});
