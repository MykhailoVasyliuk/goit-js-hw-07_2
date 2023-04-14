import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector(".gallery");


//Створюємо розмітку та заповнюємо сторінку фотками
galleryRef.insertAdjacentHTML("beforeend", toCreateGalleryMarcup(galleryItems))
function toCreateGalleryMarcup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
        `
    }).join("");
}

galleryRef.addEventListener('click', toCreateModal);

function toCreateModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const largeImg = evt.target.dataset.source;
    const instance = basicLightbox.create(`
            <img src="${largeImg}" alt="" width="800" height="600">     
    `);
    instance.show();

    if (instance.visible()) {
        galleryRef.addEventListener('keydown', toCloseModal);

        function toCloseModal(evt) {
            if (evt.code === 'Escape') {
                instance.close();
                evt.currentTarget.removeEventListener("keydown", toCloseModal)
            }
        }
    }
}

