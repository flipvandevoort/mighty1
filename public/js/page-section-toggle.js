// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Get all the page sections
const pageSections = document.querySelectorAll(".page-section");

// Add event listeners to the navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute("href").substring(1);

    // Get the target section
    const targetSection = document.getElementById(targetId);

    // Check if the target link is the first link ("Portfolio")
    const isFirstLink = link === navLinks[0];

    // Close all sections except the target section
    pageSections.forEach((section) => {
      if (section !== targetSection) {
        section.classList.remove("open");
      }
    });

    // Open or close the target section
    if (!isFirstLink) {
      // Toggle the target section
      const isTargetVisible = targetSection.classList.contains("open");
      if (isTargetVisible) {
        targetSection.classList.remove("open");
      } else {
        targetSection.classList.add("open");
      }

      // Scroll to the top of the page with a slight delay
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 0.1); // Adjust the delay as needed

      // Update the URL hash based on the target section visibility
      if (isTargetVisible) {
        window.location.hash = "";
      } else {
        window.location.hash = targetId;
      }
    } else {
      // Go to the homepage
      window.location.href = "/";
    }

    // Prevent the default link behavior and scrolling
    event.preventDefault();
  });
});
