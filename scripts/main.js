document.addEventListener('DOMContentLoaded', function() {
    const toggleOpenerButton = document.getElementById('toggle-opener');
    const openerSection = document.getElementById('opener');
    const openerContent = document.getElementById('opener-content');

    toggleOpenerButton.addEventListener('click', function() {
        openerSection.classList.toggle('collapsed');
        openerContent.classList.toggle('collapsed')
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