const squares = document.querySelectorAll(".square");

squares.forEach((square) => {

  square.addEventListener("mouseenter", () => {
    // step 1: reset all to lavender
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA";
    });

    // step 2: make only NON-hovered coffee
    squares.forEach((s) => {
      if (s !== square) {
        s.style.backgroundColor = "#6F4E37";
      }
    });
  });

  square.addEventListener("mouseleave", () => {
    squares.forEach((s) => {
      s.style.backgroundColor = "#E6E6FA";
    });
  });

});
