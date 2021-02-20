'use strict';

// ���콺 ��ũ�� �� �׺���̼� ��� ȿ��
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--blue');
  } else {
    navbar.classList.remove('navbar--blue');
  }
});

// �׺�� Ŭ�� �� �ش� ��ҷ� �̵�
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link === null) {
    return;
  }
  scrollIntoView(link);
});

// Contact me Ŭ�� �� �ش� ��ҷ� �̵�
const contactBtn = document.querySelector('#contactBtn');
contactBtn.addEventListener('click', (event) => {
  scrollIntoView('#contact');
});

// ��ũ���� ������ �� ���� ����ȭ
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  console.log();
});

// ��ũ�� ���� �� ȭ��ǥ ��ư
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
