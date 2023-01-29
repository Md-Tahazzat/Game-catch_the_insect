// Get in Touch sections logic
function toggleContact() {
  console.log("btn is clicked");
  const btn = document.getElementById("toggle-btn");
  const contactContainer = document.getElementById("contact-container");

  contactContainer.classList.toggle("-right-96");
  contactContainer.classList.toggle("md:-right-3/4");
}
