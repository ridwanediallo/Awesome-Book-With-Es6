import findHight from './footer.js';

const navBar = document.querySelector('.nav-ul');
const allSections = document.querySelectorAll('.all');

const navigation = () => {
  navBar.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('nav-link')) {
      const target = e.target.parentElement.id;
      const actTarget = document.querySelector(`.${target}`);
      allSections.forEach((sec) => {
        sec.classList.add('hidden');
      });
      actTarget.classList.remove('hidden');
      findHight();
    }
  });
};
export default navigation;