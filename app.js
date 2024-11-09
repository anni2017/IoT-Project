const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuIcon.classList.toggle('hide');
});


const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.add('scale-up');
  }, index * 500); // Adjust the delay as needed
});