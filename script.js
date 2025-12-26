const squares = document.querySelectorAll('.square');

squares.forEach((square) => {

  square.addEventListener('mouseenter', () => {
    squares.forEach((s) => {
      if (s !== square) {
        s.style.backgroundColor = '#6F4E37'; // brown (non-hovered)
      } else {
        s.style.backgroundColor = '#E6E6FA'; // hovered stays lavender
      }
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach((s) => {
      s.style.backgroundColor = '#E6E6FA'; // reset all
    });
  });

});
