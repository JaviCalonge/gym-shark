document.addEventListener('DOMContentLoaded', function() {
  const overlay = document.querySelector('.overlay');

  document.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('mouseenter', function() {
          const targetScreen = document.getElementById(this.dataset.target);
          closeAllScreens();
          targetScreen.style.display = 'block';
        //   overlay.classList.add('show');
          dimOtherLinks(this);
      });

      link.addEventListener('mouseleave', function() {
        resetLinks();
    });

  });

  document.querySelectorAll('.screen').forEach(screen => {
      screen.addEventListener('mouseleave', function() {
        closeAllScreens();
               this.style.display = 'none';
        //   overlay.classList.remove('show');
          resetLinks();
      });
      
  });

  function closeAllScreens() {
      document.querySelectorAll('.screen').forEach(screen => {
          screen.style.display = 'none';
      });

  }

  function dimOtherLinks(activeLink) {
        document.querySelectorAll('.menu-link').forEach(link => {
            if (link !== activeLink) {
                link.classList.add('dim');
            } else {
                link.classList.remove('dim');
            }

        });
    }

    function resetLinks() {
        document.querySelectorAll('.menu-link').forEach(link => {
            link.classList.remove('dim');
        });

    }

});