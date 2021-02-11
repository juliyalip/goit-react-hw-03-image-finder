import axios from "axios";

const key = "19520072-2a079db9835241cceccf8dd5b";
const baseUrl = "https://pixabay.com/api/";

function fetchImages({ searchQuery = "", currentPage = 1 }) {
  return axios.get(`${baseUrl}?image_type=photo&orientation=horizontal&q=${searchQuery}
           &language=en&page=${currentPage}&per_page=12&key=${key}`);
}

const api = { fetchImages };

export default api;
