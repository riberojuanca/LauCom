const enlaces = document.querySelector('.header-menu');

enlaces.addEventListener('click', (e) => {
  if (e.target.classList.contains('enlace')) {

    const allClases = document.querySelectorAll('.enlace');
    allClases.forEach((enlaces) => {
      enlaces.classList.remove('enlace-active');
    })
  }
  e.target.classList.add('enlace-active');
})