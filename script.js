const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = '#6F4E37'; // brown
  });

  square.addEventListener('mouseleave', () => {
    square.style.backgroundColor = '#E6E6FA'; // lavender
  });
});
