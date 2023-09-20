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
    const sectionTop = section.offsetTop + 100;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      menuLinks[i].classList.add('enlace-active');
    } else {
      menuLinks[i]?.classList.remove('enlace-active');
    }
  }
}
window.addEventListener('scroll', determineVisibleSection);



/*Slide articles*/

const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const articlesItems = document.querySelectorAll('.article-item');

let currentIndex = 0;


btnNext.addEventListener('click', (e) => {
  // Incrementa el índice
  currentIndex++;


  // Si el índice es igual o mayor que la longitud de la lista de artículos, reinicialo a 0
  if (currentIndex >= articlesItems.length) {
    currentIndex = 0;
  }

  // Muestra el artículo actual
  articlesItems[currentIndex].classList.remove('none');

  // Oculta todos los demás artículos
  for (let i = 0; i < articlesItems.length; i++) {
    if (i !== currentIndex) {
      articlesItems[i].classList.add('none');
    }
  }
});
btnBack.addEventListener('click', (e) => {
  // Decrementa el índice
  currentIndex--;

  // Si el índice es menor que 0, reinicialo al final de la lista de artículos
  if (currentIndex < 0) {
    currentIndex = articlesItems.length - 1;
  }

  // Muestra el artículo actual
  articlesItems[currentIndex].classList.remove('none');

  // Oculta todos los demás artículos
  for (let i = 0; i < articlesItems.length; i++) {
    if (i !== currentIndex) {
      articlesItems[i].classList.add('none');
    }
  }
});







