const DEFAULT_YEAR = '1911';
const params = new URLSearchParams(window.location.search);
const requestedYear = params.get('year') || DEFAULT_YEAR;
var lastYear = 1900;

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.onload = resolve;
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
    });
}

async function initEra() {
    const activeYear = ERAS[requestedYear] ? requestedYear : DEFAULT_YEAR;
    const era = ERAS[activeYear];

    lastYear = era.lastYear;
    document.title = `${era.title} - The Crossroads of Charlotte`;
    document.getElementById('year-title').textContent = `Snapshot: ${era.title}`;
    document.getElementById('pop-stats').textContent = `City population: ${era.cityPop}     County Population: ${era.countyPop}`;
    document.getElementById('era-description').innerHTML = era.description;

    // Populate Year Dropdown
    const yearSelect = document.getElementById('year-select');
    Object.keys(ERAS).sort().forEach(yr => {
        const opt = document.createElement('option');
        opt.value = yr;
        opt.textContent = yr;
        if (yr === activeYear) opt.selected = true;
        yearSelect.appendChild(opt);
    });
    yearSelect.onchange = (e) => {
        location.href = `?year=${e.target.value}`;
    };

    // Configure Prev / Next Buttons
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    if (era.prev && ERAS[era.prev]) {
        btnPrev.style.display = 'inline-block';
        btnPrev.textContent = era.prev;
        btnPrev.onclick = () => location.href = `?year=${era.prev}`;
    }
    if (era.next && ERAS[era.next]) {
        btnNext.style.display = 'inline-block';
        btnNext.textContent = era.next;
        btnNext.onclick = () => location.href = `?year=${era.next}`;
    }

    await loadScript(`./layers/${activeYear}/Roads.js`);
    await loadScript(`./layers/${activeYear}/MissingRoads.js`);
    await loadScript('common/layers.js');
    await loadScript('common/resources/qgis2web.js');
}

initEra().catch(err => console.error('Map initialization error:', err));