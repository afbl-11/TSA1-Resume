document.addEventListener("DOMContentLoaded", function () {
  let currentColor = 0;
  const colors = ["lightblue", "lightgreen", "#fff"]; // Add more colors if needed

  // Button click event listener
  document.getElementById("colorButton").addEventListener("click", function () {
    // Increment the color index
    currentColor = (currentColor + 1) % colors.length;

    // Apply the new color style to the container
    document.querySelector(".container").style.backgroundColor =
      colors[currentColor];
  });
});
