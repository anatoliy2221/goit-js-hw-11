import { refs } from './refs';
import { showMessageError } from './showMessageError';
import { imageTemplate } from './imageTemplate';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderImages(images) {
    const markup = images.hits.map(imageTemplate).join('');
    if (!images.hits.length) {
        showMessageError();
    } else {
        refs.imageContainer.innerHTML = markup;
        const lightbox = new SimpleLightbox('.gallery a', {
            captions: true,
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });

        lightbox.on('show.simplelightbox');
        lightbox.refresh();
    }
}
