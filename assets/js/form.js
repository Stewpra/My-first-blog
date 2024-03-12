const form = document.getElementById("formInput");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Check if the input fields are not empty
  const formData = new FormData(form);
  let isFormValid = true;

  formData.forEach((value) => {
    if (value.trim() === "") {
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  let formArray = JSON.parse(localStorage.getItem("formData")) || [];
  formArray.push(userData);
  localStorage.setItem("formData", JSON.stringify(formArray));

  // Optionally, you can reset the form fields after successful submission
  form.reset();
});
// const formArray = JSON.parse(localStorage.getItem('formData')) || [];

// formArray.forEach((formData, index) => {
//     // Access each form data object in the array
//     console.log(`Form submission ${index + 1}:`, formData);
// });

const root = document.documentElement;
const changeColorsButton = document.getElementById("colorMode");

let isColorModeToggled = false;

changeColorsButton.addEventListener("click", function () {
  if (isColorModeToggled) {
    // Revert to original colors
    root.style.setProperty("--primary", "#dee4e7");
    root.style.setProperty("--secondary", "gray");
    root.style.setProperty("--tertiary", "black");
  } else {
    // Change to new colors
    root.style.setProperty("--primary", "#37474f");
    root.style.setProperty("--secondary", "black");
    root.style.setProperty("--tertiary", "#eceff1");
  }

  // Toggle the state
  isColorModeToggled = !isColorModeToggled;
});
