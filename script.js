document.addEventListener("DOMContentLoaded", function () {
  const controls = document.querySelectorAll(".control");

  controls.forEach((control) => {
    control.addEventListener("click", function () {
      // Remove active class from all controls
      controls.forEach((c) => c.classList.remove("active-btn"));

      // Add active class to the clicked control
      control.classList.add("active-btn");

      // Get the data-id attribute value of the clicked control
      const targetId = control.getAttribute("date-id");

      // Remove active class from all containers
      const containers = document.querySelectorAll(".container");
      containers.forEach((container) => container.classList.remove("active"));

      // Add active class to the container corresponding to the clicked control
      const targetContainer = document.getElementById(targetId);
      targetContainer.classList.add("active");
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  const body = document.querySelector("body");

  themeBtn.addEventListener("click", function () {
    // Toggle body class for theme
    body.classList.toggle("light-mode");

    // Toggle theme button icon
    themeBtn.querySelector("i").classList.toggle("fa-sun");
    themeBtn.querySelector("i").classList.toggle("fa-moon");
  });
  function changeName() {
    const nameElement = document.getElementById("name");
    const currentName = nameElement.textContent.trim();
    const newName =
      currentName === "Hello, It's Me Shaik Aman Sayer"
        ? "Hello, It's Me Web Developer"
        : "Hello, It's Me Shaik Aman Sayer";
    nameElement.textContent = newName;
  }

  // Change name every 2 seconds
  setInterval(changeName, 2000);
});
