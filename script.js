// const enlaces = document.querySelector('.header-menu');

// enlaces.addEventListener('click', (e) => {
//   if (e.target.classList.contains('enlace')) {

//     const allClases = document.querySelectorAll('.enlace');
//     allClases.forEach((enlaces) => {
//       enlaces.classList.remove('enlace-active');
//     })
//   }
//   e.target.classList.add('enlace-active');
// })





//ANALIZA MEJOR ESTO...

const sections = document.querySelectorAll('.section');
const menuLinks = document.querySelectorAll('.enlace');

function determineVisibleSection() {
  let scrollY = window.scrollY;

  for (i = 0; i < sections.length; i++) {
    const section = sections[i];
    const sectionTop = section.offsetTop - 2;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      menuLinks[i].classList.add('enlace-active');
    } else {
      menuLinks[i].classList.remove('enlace-active');
    }
  }
}

window.addEventListener('scroll', determineVisibleSection);