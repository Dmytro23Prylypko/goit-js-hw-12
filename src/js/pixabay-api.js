import axios from 'axios';

const PIXABAY_BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '49352889-932a02498e450d158832440ce';

axios.defaults.baseURL = PIXABAY_BASE_URL;

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get('', {
    params: {
      key: PIXABAY_API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });

  return response.data;
};
