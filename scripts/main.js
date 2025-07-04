 var slider = document.getElementById('year-slider');
    var lowerValueSpan = document.getElementById('slider-value-lower');
    var upperValueSpan = document.getElementById('slider-value-upper');
    var sliderFormat = wNumb({
        decimals: 0 // This ensures no decimal places
    });
    noUiSlider.create(slider, {
        start: [1800, 2025], // Initial values for the two handles
        connect: true, // Connect the handles with a bar
        range: {
            'min': 1800,
            'max': 2025
        },
        step: 1, // Slider moves in increments of 1
        tooltips: true, // Show tooltips for current values
        pips: { // Show pips for specific values
            mode: 'range',
            density: 5
        },
        format: sliderFormat
    });

    // Update the displayed values when the slider changes
    slider.noUiSlider.on('update', function (values, handle) {
        lowerValueSpan.innerHTML = Math.round(values[0]);
        
        upperValueSpan.innerHTML = Math.round(values[1]);

          filterMinYear = values[0];
          filterMaxYear = values[1];

    if (typeof map !== 'undefined' && map !== null) {
            // Force the entire map to re-render, which will re-evaluate all layer styles
            map.render();
            map.updateSize();
            JiggerMap();

    }
        
    });


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

function JiggerMap() {
  const view = map.getView();
  var currentCenter = view.getCenter();
  var jigger = Math.random() - 0.5;
  const newCenter = [currentCenter[0] + jigger, currentCenter[1]];
  view.setCenter(newCenter);
}

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
