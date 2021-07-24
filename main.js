/* Aqui abre e fecha quando clica nas tres barras e no x */

//querry Selector significa pesquisar pelo seletor #header nav
const nav = document.querySelector('#header nav')
//querry Selector All significa pesquisar pelo seletor e pegar todos os elementos que tenha toogle pode pegar mais de um
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* Aqui ao clicar em um item do menu, esconder menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

/* Mudar o Header da pagina quando der Scroll*/

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    //Scroll e maior que a altura do Header
    header.classList.add('scroll')
  } else {
    //Scroll e menor que a altura do Header
    header.classList.remove('scroll')
  }
}

/* Testimonials Slider */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scroll Reveal*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Button */

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a secao visivel na pagina */

const sections = document.querySelectorAll('main section[id]')

function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkPointStart = checkpoint >= sectionTop
    const checkPointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkPointStart && checkPointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', () => {
  changeHeaderWhenScroll()
  backToTop()
  activateMenu()
})
