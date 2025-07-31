  // Hamburger toggle logic for mobile menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const backArrow=document.getElementById('hamburger_back');
  hamburger.onclick = function () {
      navLinks.classList.toggle('open');
  };
  // Optional: close menu when clicking a link (mobile UX)
//   navLinks.querySelectorAll('a,button').forEach(link => {
//       link.onclick = () => navLinks.classList.remove('open');
//   });
  backArrow.onclick=()=>{
    navLinks.classList.remove('open');
  }
  // Accessibility: close menu on Escape key
  document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') navLinks.classList.remove('open');
  });