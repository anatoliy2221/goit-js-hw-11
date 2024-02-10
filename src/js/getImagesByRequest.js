import { refs } from './refs';

export function getImagesByRequest(userInput) {
  const searchParams = new URLSearchParams({
    key: '42120436-8d9fae2eb5c6f9f50c8ac4324',
    q: `${userInput}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `https://pixabay.com/api/?${searchParams}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
