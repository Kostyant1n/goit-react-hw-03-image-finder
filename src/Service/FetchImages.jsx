export const fetchImages = (query = "", page = 1) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=25270231-fbbea7e95441378196db9f515&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(
      (set) => new Promise((resolve) => setTimeout(() => resolve(set), 500))
    )
    .then((res) => res.json())
    .then((data) => data.hits);
};

export { fetchImages as default };
