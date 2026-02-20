// Safer initialization with diagnostics to help debug "not running" issues
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  if (!btn) {
    console.error('Element with id "btn" not found.');
    return;
  }

  btn.addEventListener("click", function () {
    console.log('Button clicked — JavaScript is running.');
    alert("JavaScript is working!");
  });
});
