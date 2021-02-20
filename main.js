'use strict';

// 마우스 스크롤 시 네비게이션 토글 효과
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--blue');
  } else {
    navbar.classList.remove('navbar--blue');
  }
});

// 네비바 클릭 시 해당 요소로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// Contact me 클릭 시 해당 요소로 이동
const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

// 스크롤이 내려갈 때 점점 투명화
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log();
});

// 스크롤 내릴 때 화살표 버튼
const arrowUp = document.querySelector('.arrow--up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
