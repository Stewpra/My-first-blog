// DEPENDENCIES
const form = document.getElementById("formInput");
// DATA

// FUNCTIONS
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const userData = {};
  formData.forEach((value, key) => {
    userData[key] = value;
  });

  let formArray = JSON.parse(localStorage.getItem("formData")) || [];
  formArray.push(userData);
  localStorage.setItem("formData", JSON.stringify(formArray));
});

// USER INTERACTIONS

// INIT
