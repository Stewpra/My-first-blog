const root = document.documentElement;
const changeColorsButton = document.getElementById("colorMode");
const backButton = document.getElementsById("backButton");
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

landingPageButton.addEventListener("click", () => {
  window.location.href = "https://www.example.com/thank-you";
});
