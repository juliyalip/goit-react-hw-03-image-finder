function fetchImage(name, page) {
  const key = "19520072-2a079db9835241cceccf8dd5b";

  return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}
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
