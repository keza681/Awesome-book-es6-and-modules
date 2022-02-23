const section1 = document.querySelector('.section1');
const section2 = document.querySelector('.section2');
const section3 = document.querySelector('.section3');
const navList = document.getElementById('book-list');
const navAdd = document.getElementById('add-book');
const navContact = document.getElementById('contact');

export const showBooks = () => {
  section1.classList.remove('hide');
  section2.classList.add('hide');
  section3.classList.add('hide');
  navList.classList.add('current');
  navAdd.classList.remove('current');
  navContact.classList.remove('current');
};

export const showAddForm = () => {
  section2.classList.remove('hide');
  section1.classList.add('hide');
  section3.classList.add('hide');
  navList.classList.remove('current');
  navAdd.classList.add('current');
  navContact.classList.remove('current');
};
export const showContactInfo = () => {
  section3.classList.remove('hide');
  section1.classList.add('hide');
  section2.classList.add('hide');
  navContact.classList.add('current');
  navAdd.classList.remove('current');
  navList.classList.remove('current');
};
navContact.addEventListener('click', showContactInfo);
navAdd.addEventListener('click', showAddForm);
navList.addEventListener('click', showBooks);

export {
  section1, section2, section3, navAdd, navContact, navList,
};