const keys = {
  Backquote: {
    name: {
      eng: '`',
      ru: 'ё',
    },
    shift: {
      eng: '~',
      ru: 'Ё',
    },
    row: 0,
  },
  Digit1: {
    name: {
      eng: '1',
      ru: '1',
    },
    shift: {
      eng: '!',
      ru: '!',
    },
    row: 0,
  },
  Digit2: {
    name: {
      eng: '2',
      ru: '2',
    },
    shift: {
      eng: '@',
      ru: '"',
    },
    row: 0,
  },
  Digit3: {
    name: {
      eng: '3',
      ru: '3',
    },
    shift: {
      eng: '#',
      ru: '№',
    },
    row: 0,
  },
  Digit4: {
    name: {
      eng: '4',
      ru: '4',
    },
    shift: {
      eng: '$',
      ru: ';',
    },
    row: 0,
  },
  Digit5: {
    name: {
      eng: '5',
      ru: '5',
    },
    shift: {
      eng: '~',
      ru: '%',
    },
    row: 0,
  },
  Digit6: {
    name: {
      eng: '6',
      ru: '6',
    },
    shift: {
      eng: '^',
      ru: ':',
    },
    row: 0,
  },
  Digit7: {
    name: {
      eng: '7',
      ru: '7',
    },
    shift: {
      eng: '&',
      ru: '?',
    },
    row: 0,
  },
  Digit8: {
    name: {
      eng: '8',
      ru: '8',
    },
    shift: {
      eng: '*',
      ru: '*',
    },
    row: 0,
  },
  Digit9: {
    name: {
      eng: '9',
      ru: '9',
    },
    shift: {
      eng: '(',
      ru: '(',
    },
    row: 0,
  },
  Digit0: {
    name: {
      eng: '0',
      ru: '0',
    },
    shift: {
      eng: ')',
      ru: ')',
    },
    row: 0,
  },
  Minus: {
    name: {
      eng: '-',
      ru: '-',
    },
    shift: {
      eng: '_',
      ru: '_',
    },
    row: 0,
  },
  Equal: {
    name: {
      eng: '=',
      ru: '=',
    },
    shift: {
      eng: '+',
      ru: '+',
    },
    row: 0,
  },
  Backslash: {
    name: {
      eng: '\\',
      ru: '\\',
    },
    shift: {
      eng: '|',
      ru: '/',
    },
    row: 0,
  },
  Backspace: {
    name: {
      eng: 'Backspace',
      ru: 'Backspace',
    },
    shift: {
      eng: 'Backspace',
      ru: 'Backspace',
    },
    row: 0,
    width: 90,
  },
  Tab: {
    name: {
      eng: 'Tab',
      ru: 'Tab',
    },
    shift: {
      eng: 'Tab',
      ru: 'Tab',
    },
    row: 1,
    width: 100,
  },
  KeyQ: {
    name: {
      eng: 'q',
      ru: 'й',
    },
    shift: {
      eng: 'Q',
      ru: 'Й',
    },
    row: 1,
    type: 'letter',
  },
  KeyW: {
    name: {
      eng: 'w',
      ru: 'ц',
    },
    shift: {
      eng: 'W',
      ru: 'Ц',
    },
    row: 1,
    type: 'letter',
  },
  KeyE: {
    name: {
      eng: 'e',
      ru: 'у',
    },
    shift: {
      eng: 'E',
      ru: 'У',
    },
    row: 1,
    type: 'letter',
  },
  KeyR: {
    name: {
      eng: 'r',
      ru: 'к',
    },
    shift: {
      eng: 'R',
      ru: 'К',
    },
    row: 1,
    type: 'letter',
  },
  KeyT: {
    name: {
      eng: 't',
      ru: 'е',
    },
    shift: {
      eng: 'T',
      ru: 'Е',
    },
    row: 1,
    type: 'letter',
  },
  KeyY: {
    name: {
      eng: 'y',
      ru: 'н',
    },
    shift: {
      eng: 'Y',
      ru: 'Н',
    },
    row: 1,
    type: 'letter',
  },
  KeyU: {
    name: {
      eng: 'u',
      ru: 'г',
    },
    shift: {
      eng: 'U',
      ru: 'Г',
    },
    row: 1,
    type: 'letter',
  },
  KeyI: {
    name: {
      eng: 'i',
      ru: 'ш',
    },
    shift: {
      eng: 'I',
      ru: 'Ш',
    },
    row: 1,
    type: 'letter',
  },
  KeyO: {
    name: {
      eng: 'o',
      ru: 'щ',
    },
    shift: {
      eng: 'O',
      ru: 'Щ',
    },
    row: 1,
    type: 'letter',
  },
  KeyP: {
    name: {
      eng: 'p',
      ru: 'з',
    },
    shift: {
      eng: 'P',
      ru: 'З',
    },
    row: 1,
    type: 'letter',
  },
  BracketLeft: {
    name: {
      eng: '[',
      ru: 'х',
    },
    shift: {
      eng: '{',
      ru: 'Х',
    },
    row: 1,
    type: 'letter',
  },
  BracketRight: {
    name: {
      eng: ']',
      ru: 'ъ',
    },
    shift: {
      eng: '}',
      ru: 'Ъ',
    },
    row: 1,
    type: 'letter',
  },
  Delete: {
    name: {
      eng: 'Delete',
      ru: 'Delete',
    },
    shift: {
      eng: 'Delete',
      ru: 'Delete',
    },
    row: 1,
    width: 95,
  },
  CapsLock: {
    name: {
      eng: 'CapsLock',
      ru: 'CapsLock',
    },
    shift: {
      eng: 'CapsLock',
      ru: 'CapsLock',
    },
    row: 2,
    width: 130,
  },
  KeyA: {
    name: {
      eng: 'a',
      ru: 'ф',
    },
    shift: {
      eng: 'A',
      ru: 'Ф',
    },
    row: 2,
    type: 'letter',
  },
  KeyS: {
    name: {
      eng: 's',
      ru: 'ы',
    },
    shift: {
      eng: 'S',
      ru: 'Ы',
    },
    row: 2,
    type: 'letter',
  },
  KeyD: {
    name: {
      eng: 'd',
      ru: 'в',
    },
    shift: {
      eng: 'D',
      ru: 'В',
    },
    row: 2,
    type: 'letter',
  },
  KeyF: {
    name: {
      eng: 'f',
      ru: 'а',
    },
    shift: {
      eng: 'F',
      ru: 'А',
    },
    row: 2,
    type: 'letter',
  },
  KeyG: {
    name: {
      eng: 'g',
      ru: 'п',
    },
    shift: {
      eng: 'G',
      ru: 'П',
    },
    row: 2,
    type: 'letter',
  },
  KeyH: {
    name: {
      eng: 'h',
      ru: 'р',
    },
    shift: {
      eng: 'H',
      ru: 'Р',
    },
    row: 2,
    type: 'letter',
  },
  KeyJ: {
    name: {
      eng: 'j',
      ru: 'о',
    },
    shift: {
      eng: 'J',
      ru: 'О',
    },
    row: 2,
    type: 'letter',
  },
  KeyK: {
    name: {
      eng: 'k',
      ru: 'л',
    },
    shift: {
      eng: 'K',
      ru: 'Л',
    },
    row: 2,
    type: 'letter',
  },
  KeyL: {
    name: {
      eng: 'l',
      ru: 'д',
    },
    shift: {
      eng: 'L',
      ru: 'Д',
    },
    row: 2,
    type: 'letter',
  },
  Semicolon: {
    name: {
      eng: ';',
      ru: 'ж',
    },
    shift: {
      eng: ':',
      ru: 'Ж',
    },
    row: 2,
    type: 'letter',
  },
  Quote: {
    name: {
      eng: '\'',
      ru: 'э',
    },
    shift: {
      eng: '"',
      ru: 'Э',
    },
    row: 2,
    type: 'letter',
  },
  Enter: {
    name: {
      eng: 'Enter',
      ru: 'Enter',
    },
    shift: {
      eng: 'Enter',
      ru: 'Enter',
    },
    row: 2,
    width: 120,
  },
  ShiftLeft: {
    name: {
      eng: 'Shift',
      ru: 'Shift',
    },
    shift: {
      eng: 'Shift',
      ru: 'Shift',
    },
    row: 3,
    width: 130,
  },
  KeyZ: {
    name: {
      eng: 'z',
      ru: 'я',
    },
    shift: {
      eng: 'Z',
      ru: 'Я',
    },
    row: 3,
    type: 'letter',
  },
  KeyX: {
    name: {
      eng: 'x',
      ru: 'ч',
    },
    shift: {
      eng: 'X',
      ru: 'Ч',
    },
    row: 3,
    type: 'letter',
  },
  KeyC: {
    name: {
      eng: 'c',
      ru: 'с',
    },
    shift: {
      eng: 'C',
      ru: 'С',
    },
    row: 3,
    type: 'letter',
  },
  KeyV: {
    name: {
      eng: 'v',
      ru: 'м',
    },
    shift: {
      eng: 'V',
      ru: 'М',
    },
    row: 3,
    type: 'letter',
  },
  KeyB: {
    name: {
      eng: 'b',
      ru: 'и',
    },
    shift: {
      eng: 'B',
      ru: 'И',
    },
    row: 3,
    type: 'letter',
  },
  KeyN: {
    name: {
      eng: 'n',
      ru: 'т',
    },
    shift: {
      eng: 'N',
      ru: 'Т',
    },
    row: 3,
    type: 'letter',
  },
  KeyM: {
    name: {
      eng: 'm',
      ru: 'ь',
    },
    shift: {
      eng: 'M',
      ru: 'Ь',
    },
    row: 3,
    type: 'letter',
  },
  Comma: {
    name: {
      eng: ',',
      ru: 'б',
    },
    shift: {
      eng: '<',
      ru: 'Б',
    },
    row: 3,
    type: 'letter',
  },
  Period: {
    name: {
      eng: '.',
      ru: 'ю',
    },
    shift: {
      eng: '>',
      ru: 'Ю',
    },
    row: 3,
    type: 'letter',
  },
  Slash: {
    name: {
      eng: '/',
      ru: '.',
    },
    shift: {
      eng: '?',
      ru: ',',
    },
    row: 3,
  },
  ArrowUp: {
    name: {
      eng: '▲',
      ru: '▲',
    },
    shift: {
      eng: '▲',
      ru: '▲',
    },
    row: 3,
  },
  ShiftRight: {
    name: {
      eng: 'Shift',
      ru: 'Shift',
    },
    shift: {
      eng: 'Shift',
      ru: 'Shift',
    },
    row: 3,
    width: 120,
  },
  ControlLeft: {
    name: {
      eng: 'Ctrl',
      ru: 'Ctrl',
    },
    shift: {
      eng: 'Ctrl',
      ru: 'Ctrl',
    },
    row: 4,
  },
  Win: {
    name: {
      eng: 'Win',
      ru: 'Win',
    },
    shift: {
      eng: 'Win',
      ru: 'Win',
    },
    row: 4,
  },
  AltLeft: {
    name: {
      eng: 'Alt',
      ru: 'Alt',
    },
    shift: {
      eng: 'Alt',
      ru: 'Alt',
    },
    row: 4,
  },
  Space: {
    name: {
      eng: ' ',
      ru: ' ',
    },
    shift: {
      eng: ' ',
      ru: ' ',
    },
    row: 4,
    width: 405,
  },
  AltRight: {
    name: {
      eng: 'Alt',
      ru: 'Alt',
    },
    shift: {
      eng: 'Alt',
      ru: 'Alt',
    },
    row: 4,
  },
  ArrowLeft: {
    name: {
      eng: '◄',
      ru: '◄',
    },
    shift: {
      eng: '◄',
      ru: '◄',
    },
    row: 4,
  },
  ArrowDown: {
    name: {
      eng: '▼',
      ru: '▼',
    },
    shift: {
      eng: '▼',
      ru: '▼',
    },
    row: 4,
  },
  ArrowRight: {
    name: {
      eng: '►',
      ru: '►',
    },
    shift: {
      eng: '►',
      ru: '►',
    },
    row: 4,
  },
  ControlRight: {
    name: {
      eng: 'Ctrl',
      ru: 'Ctrl',
    },
    shift: {
      eng: 'Ctrl',
      ru: 'Ctrl',
    },
    row: 4,
    width: 65,
  },
};

export default keys;
