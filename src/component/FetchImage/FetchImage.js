const key = "19520072-2a079db9835241cceccf8dd5b";
const baseUrl = "https://pixabay.com/api/";

function fetchImage(name, page) {
  return fetch(`${baseUrl}?image_type=photo&orientation=horizontal&q=${name}
           &language=en&page=${page}&per_page=12&key=${key}`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Введите правельный запрос`));
    }
  );
}

const api = { fetchImage };

export default api;
