import axios from 'axios';

// const PIXABAY_BASE_URL = "https://pixabay.com/api/";
const PIXABAY_API_KEY = '49352889-932a02498e450d158832440ce';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = query => {
  return axios
    .get('', {
      params: {
        key: PIXABAY_API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data.hits);
};
