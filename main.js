document.addEventListener("DOMContentLoaded", function () {
  let password = document.querySelector("#password").value;
  let confPassword = document.querySelector("confPassword").value;
  let error = document.querySelector("#error");

  if (password != confPassword) {
    error.innerHTML = "*passwords do not match";
  }
});
