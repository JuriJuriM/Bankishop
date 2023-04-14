import './index.scss';

// menu burger

const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');
const body = document.querySelector('body');

function handleClick() {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
}

headerBurger.addEventListener('click', handleClick);

// searching of picture with input 

const headerInput = document.querySelector('.header__input');

headerInput.oninput = function () {
  const val = this.value.trim();
  const subtitleItems = document.querySelectorAll('.first__subtitle');
  if (val !== '') {
    subtitleItems.forEach(function (elem) {
      if (elem.innerText.search(val) === -1) {
        elem.classList.add('hide');
        elem.innerHTML = elem.innerText;
      }
      else {
        elem.classList.remove('hide');
        const str = elem.innerText;
        elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
      }
    });
  }
  else {
    subtitleItems.forEach(function (elem) {
      elem.classList.remove('hide');
      elem.innerHTML = elem.innerText;
    });
  }
};

function insertMark(string, pos, len) {
  return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
}