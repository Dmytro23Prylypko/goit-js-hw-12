import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const lishtBox = new SimpleLightbox('.gallery li a', {});

export function getGalleryItems(items) {
  items = items
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}"/>
          </a>
          <ul class="gallery-info">
            <li>
              <span class="gallery-info-subtitle">Likes</span>
              <span>${likes}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Views</span>
              <span>${views}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Comments</span>
              <span>${comments}</span>
            </li>
            <li>
              <span class="gallery-info-subtitle">Downloads</span>
              <span>${downloads}</span>
            </li>
          </ul>
        </li>
      `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', items);

  lishtBox.refresh();
}
