
        const readMoreBtn = document.getElementById('read-more-btn');
        const moreContent = document.getElementById('more-content');

        readMoreBtn.addEventListener('click', () => {
            if (moreContent.style.display === 'none') {
                moreContent.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });