const mobileBurger = document.querySelector('.burger');
const mobileNavigation = document.querySelector('.mobile-navigation');

mobileBurger.addEventListener('click', () => {
  mobileNavigation.classList.toggle('hide-mobile-navigation');
})

function transformBurgerToX(el) {
  el.classList.toggle('transform');
}