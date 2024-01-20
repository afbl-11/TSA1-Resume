document.addEventListener("DOMContentLoaded", function () {
 
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeContainerColor() {
    const container = document.querySelector(".container");
    container.style.backgroundColor = getRandomColor();
  }

  function changeTextColors() {
    const textElements = document.querySelectorAll(
      ".user-information h1, .user-information p, .Objective h3, .Objective pre, .Background h3, .Background ul li strong, .Background ul li span, .Skills h3, .Skills-list li"
    );

    textElements.forEach(function (element) {
      element.style.color = getRandomColor();
    });
  }

  function changeButtonColor() {
    const button = document.getElementById("colorButton");
    button.style.backgroundColor = getRandomColor();
    button.style.color = getRandomColor();
  }

  document.getElementById("colorButton").addEventListener("click", function () {
    changeContainerColor();
    changeTextColors();
    changeButtonColor();
  });
});
