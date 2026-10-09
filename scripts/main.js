 var slider = document.getElementById('year-slider');
    var lowerValueSpan = document.getElementById('slider-value-lower');
    var upperValueSpan = document.getElementById('slider-value-upper');
    var sliderFormat = wNumb({
        decimals: 0 // This ensures no decimal places
    });
    noUiSlider.create(slider, {
        start: [1760, 2026], // Initial values for the two handles
        connect: true, // Connect the handles with a bar
        range: {
            'min': 1760,
            'max': 2026
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
const minYear = 1760;
const maxYear = 2026;

var roadColorStops = [
  { yearRatio: 0.0, color: [10, 8, 0] },
  { yearRatio: 0.25, color: [15, 95, 5] },
  { yearRatio: 0.42, color: [20, 60, 110] },
  { yearRatio: 0.58, color: [154, 5, 50] },
  { yearRatio: 0.70, color: [195, 110, 60] },
  
    {yearRatio:0.83, color:[120,50,190]},
  { yearRatio: 1.0, color: [240, 240, 40] }
];
var estimatedOldColors = [  
    { yearRatio: 0.0, color: [15, 95, 5] },
  { yearRatio: 0.5, color: [200, 120, 50] },
  { yearRatio: 1, color: [100, 165, 150] },]

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `; expires=${date.toUTCString()}`;
  
  // SameSite=Lax and Secure are good defaults for basic preference cookies
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`;
}


function getCookie(name) {
  const nameEQ = encodeURIComponent(name) + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}


function deleteCookie(name) {
  document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

document.addEventListener('DOMContentLoaded', function() {
    
  const noShowOpenerCookie = getCookie('Opener')
  initLegend(roadColorStops,'road-color-ramp', 'road-legend-labels',1760,2026);
  initLegend(estimatedOldColors, 'paths-color-ramp','paths-legend-labels', 1700,1905)
  //addHamburger();
  const toggleOpenerButton = document.getElementById('toggle-opener');
  const openerSection = document.getElementById('opener');
  const openerContent = document.getElementById('opener-content');
  if(noShowOpenerCookie){
    openerSection.classList.add('collapsed')
    toggleOpenerButton.textContent = 'Show Info'
  } 

    toggleOpenerButton.addEventListener('click', function() {
        openerSection.classList.toggle('collapsed');
        if (openerSection.classList.contains('collapsed')) {
            toggleOpenerButton.textContent = 'Show Info';
            setCookie('Opener',true,365)
        } else {
            toggleOpenerButton.textContent = 'Hide Info';
        }
    });

    // Optional: Start with the opener collapsed
    // openerSection.classList.add('collapsed');
    // toggleOpenerButton.textContent = 'Show Info';
});



function initLegend(colorStops,colorRampId, legendId,minYear, maxYear) {
  const colorRampEl = document.getElementById(colorRampId);
  const labelsEl = document.getElementById(legendId);

  // Build linear-gradient string
  const gradientStops = colorStops.map(stop => {
    const [r, g, b] = stop.color;
    const pct = (stop.yearRatio * 100).toFixed(1);
    return `rgb(${r}, ${g}, ${b}) ${pct}%`;
  });

  colorRampEl.style.background = `linear-gradient(to right, ${gradientStops.join(', ')})`;

  // Render labels for each stop
  labelsEl.innerHTML = '';
  colorStops.forEach((stop, index) => {
    const year = Math.round(minYear + stop.yearRatio * (maxYear - minYear));
    const label = document.createElement('span');
    label.className = 'legend-label';
    label.innerText = year;

    // Adjust alignment for endpoints so text stays bounded nicely
    const leftPct = stop.yearRatio * 100;
    if (index === 0) {
      label.style.left = '0%';
      label.style.transform = 'translateX(0%)';
    } else if (index === colorStops.length - 1) {
      label.style.left = '100%';
      label.style.transform = 'translateX(-100%)';
    } else {
      label.style.left = `${leftPct}%`;
      label.style.transform = 'translateX(-50%)';
    }

    labelsEl.appendChild(label);
  });
}

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
