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
    const sectionTop = section.offsetTop + 1;
    const sectionBottom = sectionTop + section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      menuLinks[i].classList.add('enlace-active');
    } else {
      menuLinks[i].classList.remove('enlace-active');
    }
  }
}

window.addEventListener('scroll', determineVisibleSection);


/*Slide articles*/

const btnBack = document.querySelector('.back');
const btnNext = document.querySelector('.next');
const articlesItems = document.querySelectorAll('.article-item');


btnBack.addEventListener('click', () => {
  articlesItems.forEach(e => {
    if (articlesItems.length === 0) {
      articlesItems[0].classList.remove('none');
      articlesItems[1].classList.add('none');
      articlesItems[-1].classList.add('none');
    } else if (articlesItems.length === 1) {
      articlesItems[1].classList.remove('none');
      articlesItems[0].classList.add('none');
      articlesItems[-1].classList.add('none');
    } else if (articlesItems.length === -1) {
      articlesItems[-1].classList.remove('none');
      articlesItems[1].classList.add('none');
      articlesItems[0].classList.add('none');
    }
  });
})

btnNext.addEventListener('click', () => {
  articlesItems.forEach(e => {
    articlesItems[0].classList.add('none');
    articlesItems[1].classList.remove('none');
    articlesItems[-1].classList.add('none');
  });
})




