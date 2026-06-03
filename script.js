const galleryItems = document.querySelectorAll('.gallery-item');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

galleryItems.forEach(item => {

    item.addEventListener('click', () => {

        lightbox.style.display = 'flex';

        lightboxImg.src = item.src;

        lightboxImg.alt = item.alt;

    });

});

closeBtn.addEventListener('click', () => {

    lightbox.style.display = 'none';

});

lightbox.addEventListener('click', (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = 'none';

    }

});

document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {

        lightbox.style.display = 'none';

    }

});