const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

nameInputEl.addEventListener('input', () => {
  if (nameInputEl.value.trim() !== '') {
    nameOutputEl.textContent = nameInputEl.value;
  } else {
    nameOutputEl.textContent = 'Anonymous';
  }
});