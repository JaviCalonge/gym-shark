document.addEventListener('DOMContentLoaded', function () {
  const customSelect = document.querySelector('.custom-select');
  const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
  const customOptions = customSelect.querySelector('.custom-options');

  customSelectTrigger.addEventListener('click', function () {
      customSelect.classList.toggle('open');
  });

  document.querySelectorAll('.custom-option').forEach(option => {
      option.addEventListener('click', function () {
          const selectedFlag = option.getAttribute('data-flag');
          const selectedText = option.textContent;
          customSelectTrigger.querySelector('span').innerHTML = `<img src="${selectedFlag}" class="flag-icon"> ${selectedText}`;
          customSelect.classList.remove('open');
      });
  });

  document.addEventListener('click', function (e) {
      if (!customSelect.contains(e.target)) {
          customSelect.classList.remove('open');
      }
  });
});


// -----TOP------


document.addEventListener('DOMContentLoaded', function () {
  const customSelect = document.querySelector('.custom-select-top');
  const customSelectTrigger = customSelect.querySelector('.custom-select-trigger-top');
  const customOptions = customSelect.querySelector('.custom-options-top');

  customSelectTrigger.addEventListener('click', function () {
      customSelect.classList.toggle('open');
  });

  document.querySelectorAll('.custom-option-top').forEach(option => {
      option.addEventListener('click', function () {
          const selectedFlag = option.getAttribute('data-flag');
          const selectedText = option.textContent;
          customSelectTrigger.querySelector('span').innerHTML = `<img src="${selectedFlag}" class="flag-icon"> ${selectedText}`;
          customSelect.classList.remove('open');
      });
  });

  document.addEventListener('click', function (e) {
      if (!customSelect.contains(e.target)) {
          customSelect.classList.remove('open');
      }
  });
});