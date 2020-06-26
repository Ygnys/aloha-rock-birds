

const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navigation');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navigation__checkbox');
      } else {
        navbar.classList.remove('navigation_checkbox');
      }
    });
  }
}
