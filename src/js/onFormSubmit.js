import { refs } from './refs';
import { renderImages } from './renderImages';
import { getImagesByRequest } from './getImagesByRequest';
import { showLoader } from './loader';
import { hideLoader } from './loader';
import { showMessageError } from './showMessageError';

export function onFormSubmit(event) {
    event.preventDefault();
    showLoader();
    refs.imageContainer.innerHTML = '';
    const userInput = event.target.elements.query.value;
    getImagesByRequest(userInput)
        .then(renderImages)
        .catch(showMessageError)
        .finally(hideLoader);

    event.target.reset();
}
