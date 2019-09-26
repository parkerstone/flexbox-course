const navHamburger = document.querySelector('#nav-hamburger');
navHamburger.addEventListener('click', (e) => {
  navHamburger.parentElement.classList.toggle('active');
})
