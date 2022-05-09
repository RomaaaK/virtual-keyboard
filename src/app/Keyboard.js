class KeyBoard {
  constructor(keys, container, lang = 'eng') {
    this.keys = keys;
    this.lang = lang;
    this.container = container;
    this.shift = false;
    this.keyBoard = null;
    this.pressKeys = [];
    this.caps = false;
    this.#render();
  }

  #render() {
    this.keyBoard = this.createKeyboard();
    this.container.innerHTML = '';
    this.container.append(this.keyBoard);
    this.pressKeys.forEach((k) => {
      this.container.querySelector(`.${k}`)?.classList.add('active');
    });
  }

  getKey(code) {
    if (code === 'Tab') {
      return '\t';
    }
    if (code === 'Enter') {
      return '\n';
    }
    const keyCode = this.keys[code];
    let letter = this.shift ? keyCode.shift[this.lang] : keyCode.name[this.lang];
    if (this.caps && keyCode.type === 'letter') {
      letter = letter.toUpperCase();
    } else if (!this.caps && this.shift) {
      letter = letter.toLowerCase();
    }
    return letter;
  }

  pressKey(event) {
    if (Object.keys(this.keys).includes(event.code)) {
      event.preventDefault();
    }

    if (event.code === 'CapsLock') {
      this.caps = !this.caps;
      this.#render();
      if (!this.caps) {
        this.upKey(event);
        this.#render();
        return this.getKey(event.code);
      }
    }

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      this.shift = true;
      this.caps = !this.caps;
      this.#render();
    }
    this.pressKeys.push(event.code);
    this.pressKeys.forEach((k) => {
      this.container.querySelector(`.${k}`)?.classList.add('active');
    });

    if (event.code === 'AltLeft' && event.ctrlKey) {
      this.lang = this.lang === 'eng' ? 'ru' : 'eng';
      localStorage.setItem('lang', this.lang);
      this.#render();
    }

    return this.getKey(event.code);
  }

  upKey(event) {
    this.pressKeys = this.pressKeys.filter((k) => k !== event.code);
    this.container.querySelector(`.${event.code}`)?.classList.remove('active');
    if (!this.pressKeys.includes('ShiftLeft') && !this.pressKeys.includes('ShiftRight') && this.shift) {
      this.shift = false;
      this.caps = !this.caps;
      this.#render();
    }
  }

  createKeyboard() {
    const keyBoard = document.createElement('div');
    keyBoard.classList.add('keyboard');
    for (let row = 0; row < 5; row += 1) {
      const rowDiv = document.createElement('div');
      rowDiv.classList.add('row');
      Object.entries(this.keys).filter((k) => k[1].row === row).forEach((key) => {
        const btn = document.createElement('button');
        let letter = this.shift ? key[1].shift[this.lang] : key[1].name[this.lang];
        btn.classList.add('btn');
        btn.classList.add(key[0]);
        // eslint-disable-next-line prefer-destructuring
        btn.dataset.keyCode = key[0];
        if (key[1].type === 'letter' && this.caps) {
          letter = letter.toUpperCase();
        }
        if (!this.caps && this.shift && key[1].type === 'letter') {
          letter = letter.toLowerCase();
        }
        btn.innerHTML = letter;
        if (key[1].width) {
          btn.style.width = `${key[1].width}px`;
        }
        rowDiv.append(btn);
      });
      keyBoard.append(rowDiv);
    }
    return keyBoard;
  }
}

export default KeyBoard;
