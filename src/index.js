import KeyBoard from './app/Keyboard';
import keys from './app/keys';
import Textarea from './app/Textarea';
import './scss/main.scss';

const { body } = document;
const title = document.createElement('h1');
title.innerHTML = 'Виртуальная клавиатура';
const textarea = document.createElement('textarea');
const container = document.createElement('div');
container.classList.add('container');
const keyboardDiv = document.createElement('div');
keyboardDiv.classList.add('keyboard-container');
const info = document.createElement('p');
info.classList.add('info');
info.innerHTML = 'Клавиатура создана в операционной системе Ubunty. Для переключения языка комбинация: левыe ctrl + alt';
container.append(title, textarea, keyboardDiv, info);
body.append(container);

const saveLang = localStorage.getItem('lang') || 'eng';

const k = new KeyBoard(keys, keyboardDiv, saveLang);
const text = new Textarea(textarea);

document.body.addEventListener('keydown', (event) => {
  if (keys[event.code]) {
    text.setValue(k.pressKey(event));
  }
});

document.body.addEventListener('Click', (event) => {
  text.setValue(k.pressKey(event));
});

document.body.addEventListener('keyup', (event) => {
  if (event.code !== 'CapsLock') {
    k.upKey(event);
  }
});

document.body.addEventListener('ClickUp', (event) => {
  if (event.code !== 'CapsLock') {
    k.upKey(event);
  }
});
let isClick = false;
let mouseKey = null;
keyboardDiv.addEventListener('mousedown', (event) => {
  if (!isClick) {
    if (event.target.tagName === 'BUTTON') {
      const clickEvent = new KeyboardEvent('Click', {
        code: event.target.dataset.keyCode,
        bubbles: true,
        cancelable: true,
      });
      document.body.dispatchEvent(clickEvent);
      mouseKey = event.target.dataset.keyCode;
    }
    isClick = true;
  }
});

keyboardDiv.addEventListener('mouseup', () => {
  isClick = false;
  const clickEvent = new KeyboardEvent('ClickUp', {
    code: mouseKey,
    bubbles: true,
    cancelable: true,
  });
  document.body.dispatchEvent(clickEvent);
});
