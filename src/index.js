// Assuming you have several list items, loop through them or use querySelectorAll
var toggleButtons = document.querySelectorAll('.toggleButton');

toggleButtons.forEach(function (toggleButton, index) {
  var iconPlus = toggleButton.querySelector('.asked__btn-icon');
  var iconMinus = toggleButton.querySelector('.icon-hidden');
  var additionalText = toggleButton.querySelector('.asked-item__hidden-text');

  toggleButton.addEventListener('click', function () {
    // Toggle the visibility of additional text
    additionalText.style.display =
      additionalText.style.display === 'none' ||
      additionalText.style.display === ''
        ? 'block'
        : 'none';

    // Toggle the icons
    if (
      additionalText.style.display === 'none' ||
      additionalText.style.display === ''
    ) {
      iconPlus.style.display = 'block';
      iconMinus.style.display = 'none';
    } else {
      iconPlus.style.display = 'none';
      iconMinus.style.display = 'block';
    }
  });
});
