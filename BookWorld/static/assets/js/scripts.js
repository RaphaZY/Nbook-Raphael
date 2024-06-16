const details = document.querySelector('details');
const cardText = document.querySelector('.card-text');

details.addEventListener('toggle', () => {
  if (details.open) {
    cardText.style.display = 'none';
  } else {
    cardText.style.display = 'block';
  }
});