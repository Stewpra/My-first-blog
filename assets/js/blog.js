const root = document.documentElement;
const changeColorsButton = document.getElementById("colorMode");
const backButton = document.getElementById("backButton");
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

backButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// Retrieve the array from localStorage
const formArray = JSON.parse(localStorage.getItem("formData")) || [];

// Get container for posts
const blogContainer = document.getElementById("blog-posts-container");

// Iterate over the formData and create blog post elements
formArray.forEach((formData) => {
  // Create a card element for the blog post
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card");
  card.style.border = "3px solid ";
  card.style.margin = "3px";
  card.style.borderRadius = "8px";
  card.style.padding = "5px";
  card.style.width = "100%";

  // Create elements for the blog post
  const postTitle = document.createElement("h3");
  postTitle.textContent = `Title: ${formData.blogTitle}`;

  console.log(formData);

  const postContent = document.createElement("p");
  postContent.textContent = `Content: ${formData.blogcontent}`;

  const postAuthor = document.createElement("p");
  postAuthor.textContent = `Username: ${formData.userName}`;

  // Append elements to the card
  card.appendChild(postTitle);
  card.appendChild(postContent);
  card.appendChild(postAuthor);

  // Append the card to the main blog container
  blogContainer.appendChild(card);
});
