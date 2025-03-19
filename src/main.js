import { fetchImages } from './js/pixabay-api';
import { getGalleryItems } from './js/render-functions';
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIco from './../assets/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value;
  gallery.innerHTML = '';
  loader.style.display = 'block';

  fetchImages(query)
    .then(hits => {
      if (!hits.length) {
        iziToast.show(
          getIziToastOptions(
            'Sorry, there are no images matching your search query. Please try again!'
          )
        );
      } else {
        getGalleryItems(hits);
      }
    })
    .catch(error => {
      iziToast.show(getIziToastOptions(error.message));
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}

function getIziToastOptions(message) {
  return {
    message,
    iconUrl: errorIco,
    color: '#ef4040',
    messageColor: '#fff',
    maxWidth: '380px',
    messageSize: '16',
    messageLineHeight: '150%',
    position: 'topRight',
    iconColor: '#fff',
  };
}
