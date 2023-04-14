import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');


galleryRef.insertAdjacentHTML('beforeend', onCreateGalleryMarcup(galleryItems))
function onCreateGalleryMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
`
    }).join('');
}

const box = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
}); 