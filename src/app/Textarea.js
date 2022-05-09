class Textarea {
  constructor(element) {
    this.value = '';
    this.area = element;
    this.area.focus();
    this.position = this.area.selectionStart;
    this.area.addEventListener('click', () => {
      this.position = this.area.selectionStart;
    });
  }

  setValue(l) {
    if (l === 'Backspace' || l === 'Delete') {
      this.deleteLetter(l);
    } else if (l.length <= 1) {
      this.position += 1;
      this.value = this.value.slice(0, this.position - 1) + l + this.value.slice(this.position - 1);
    }
    this.area.value = this.value;
    if (this.position === -1) {
      this.position = 0;
    }
    this.area.selectionStart = this.position;
    this.area.selectionEnd = this.position;
  }

  deleteLetter(direction) {
    if (direction === 'Backspace') {
      this.position -= 1;
      this.value = this.value.split('').filter((_, i) => i !== this.position).join('');
    } else if (direction === 'Delete') {
      this.value = this.value.split('').filter((_, i) => i !== this.position).join('');
    }
  }
}

export default Textarea;
