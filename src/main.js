import { fetchImages } from './js/pixabay-api';
import { getGalleryItems } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIco from './../assets/error.png';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadButton = document.querySelector('#loadMorePictures');
const theEndText = document.querySelector('.the-end-of-search');

let prevQuery = null;
let page = 1;
const perPage = 15;
let total = null;
let totalPages = null;

// loadButton.style.display = 'none';
// theEndText.style.display = 'none';

form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements['search-text'].value.trim();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  loadButton.style.display = 'none';

  if (prevQuery !== query) {
    page = 1;
  }

  try {
    if (query) {
      const data = await fetchImages(query, page, perPage);
      const hits = data.hits;
      total = data.total;
      totalPages = Math.ceil(total / perPage);

      if (!hits.length) {
        iziToast.show(
          getIziToastOptions(
            'Sorry, there are no images matching your search query. Please try again!'
          )
        );
      } else {
        getGalleryItems(hits);

        prevQuery = query;

        if (page < totalPages) {
          loadButton.style.display = 'block';
          theEndText.style.display = 'none';
        } else {
          theEndText.style.display = 'block';
        }
      }
    } else {
      throw new Error('Invalid value.');
    }
  } catch (error) {
    iziToast.show(getIziToastOptions(error.message));
  }

  loader.style.display = 'none';
}

loadButton.addEventListener('click', handleLoadButton);

async function handleLoadButton(event) {
  loader.style.display = 'block';
  loadButton.style.display = 'none';

  try {
    if (page < totalPages) {
      const data = await fetchImages(prevQuery, page++, perPage);
      const hits = data.hits;
      total = data.total;
      totalPages = Math.ceil(total / perPage);

      getGalleryItems(hits);
      loadButton.style.display = 'block';
    } else {
      loadButton.style.display = 'none';
      theEndText.style.display = 'block';
    }
  } catch (error) {
    iziToast.show(getIziToastOptions(error.message));
  }
  loader.style.display = 'none';
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
