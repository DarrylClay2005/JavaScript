// Select the form element
const form = document.querySelector("form");

// Listen for the form's submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior
  console.log("Form submitted!");
  // Add your form handling logic here
});
//
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default button click behavior
  console.log("Button clicked!");
  //
});
// Grab values from each input
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    console.log(`${input.name}: ${input.value}`);
  });
});
