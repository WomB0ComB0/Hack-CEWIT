const activateButton = document.getElementById('activate-container');
const currentContainer = document.querySelector('.container');
const newContainer = document.querySelector('.hidden');

activateButton.addEventListener('click', function() {
  currentContainer.classList.add('hidden');
  newContainer.classList.remove('hidden');
});