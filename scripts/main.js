document.addEventListener('DOMContentLoaded', function() {
    
    //addHamburger();
    const toggleOpenerButton = document.getElementById('toggle-opener');
    const openerSection = document.getElementById('opener');
    const openerContent = document.getElementById('opener-content');

    toggleOpenerButton.addEventListener('click', function() {
        openerSection.classList.toggle('collapsed');
        if (openerSection.classList.contains('collapsed')) {
            toggleOpenerButton.textContent = 'Show Info';
        } else {
            toggleOpenerButton.textContent = 'Hide Info';
        }
    });

    // Optional: Start with the opener collapsed
    // openerSection.classList.add('collapsed');
    // toggleOpenerButton.textContent = 'Show Info';
});

function addHamburger() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const flyoutMenu = document.getElementById('flyout-menu');

  hamburgerBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const isCollapsed = flyoutMenu.classList.toggle('collapsed');
    flyoutMenu.setAttribute('aria-hidden', isCollapsed ? 'true' : 'false');
  });

  // Close menu when clicking outside the menu content
  document.addEventListener('click', function (event) {
    if (
      !flyoutMenu.classList.contains('collapsed') &&
      !flyoutMenu.querySelector('.flyout-menu-content').contains(event.target) &&
      !hamburgerBtn.contains(event.target)
    ) {
      flyoutMenu.classList.add('collapsed');
      flyoutMenu.setAttribute('aria-hidden', 'true');
    }
  });

  // Optional: ESC key closes the menu
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !flyoutMenu.classList.contains('collapsed')) {
      flyoutMenu.classList.add('collapsed');
      flyoutMenu.setAttribute('aria-hidden', 'true');
    }
  });

}
