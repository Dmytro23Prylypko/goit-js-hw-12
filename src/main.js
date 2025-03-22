import { fetchImages } from './js/pixabay-api';
import { getGalleryItems, clearElement } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIco from './../assets/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('#loadMorePictures');

let prevQuery = null;
let page = 1;
const perPage = 15;
let total = null;
let totalPages = null;

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();
  clearElement(gallery);
  loader.style.display = 'block';
  loadButton.style.display = 'none';
  page = 1;

  try {
    if (query) {
      const data = await fetchImages(query, page++, perPage);
      const hits = data.hits;
      total = data.total;
      totalPages = Math.ceil(total / perPage);

      if (!hits.length) {
        iziToast.show(
          getIziToastErrorOptions(
            'Sorry, there are no images matching your search query. Please try again!'
          )
        );
      } else {
        getGalleryItems(hits);

        prevQuery = query;

        if (page < totalPages) {
          loadButton.style.display = 'block';
        } else {
          iziToast.show(
            getIziToastErrorOptions(
              "We're sorry, but you've reached the end of search results."
            )
          );
        }
      }
    } else {
      iziToast.show(getIziToastNotificationOptions('Invalid value.'));
    }
  } catch (error) {
    iziToast.show(getIziToastErrorOptions(error.message));
  }

  loader.style.display = 'none';
}

loadButton.addEventListener('click', handleLoadButton);

async function handleLoadButton(event) {
  loader.style.display = 'block';
  loadButton.style.display = 'none';

  const galleryCard = document.querySelector('.gallery li');
  const scrollHeight = galleryCard.getBoundingClientRect().height * 2;

  try {
    if (page <= totalPages) {
      const data = await fetchImages(prevQuery, page++, perPage);
      const hits = data.hits;
      total = data.total;
      totalPages = Math.ceil(total / perPage);

      getGalleryItems(hits);
      loadButton.style.display = 'block';
      scrollBy(0, scrollHeight);

      if (page > totalPages) {
        loadButton.style.display = 'none';
        iziToast.show(
          getIziToastErrorOptions(
            "We're sorry, but you've reached the end of search results."
          )
        );
      }
    }
  } catch (error) {
    iziToast.show(getIziToastOptions(error.message));
  }
  loader.style.display = 'none';
}

function getIziToastErrorOptions(message) {
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

function getIziToastNotificationOptions(message) {
  return {
    message,
    color: '#fff59e',
    maxWidth: '380px',
    messageSize: '16',
    messageLineHeight: '150%',
    position: 'topRight',
  };
}
