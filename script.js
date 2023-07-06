const textarea = document.querySelector('textarea');
const container = document.querySelector('.search_container')
textarea.addEventListener('input', () => {
  textarea.style.backgroundColor = '#2c2d30';
  container.style.backgroundColor = '#2c2d30';
  container.style.border = '1.5px solid #2c2d30'
});

textarea.addEventListener('focus', () => {
    textarea.style.backgroundColor = '#2c2d30';
    container.style.backgroundColor = '#2c2d30';
    container.style.border = '1.5px solid #2c2d30'
  });

textarea.addEventListener('blur', () => {
    textarea.style.backgroundColor = '#202124';
    container.style.backgroundColor = '#202124';
    container.style.border = '1.5px solid #5f6368'
  });

textarea.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});