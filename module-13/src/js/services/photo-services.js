const baseUrl = 'https://pixabay.com/api/';
const key = 'key=17934686-6855a8a3291e2952d0451e641';
export default {
  page: 1,
  query: '',

  fetchArticles() {
    const requestParams = `q=${this.query}&`;
    return fetch(
      baseUrl + `?${key}&q=${this.query}&image_type=photo&page=${this.page}`,
    )
      .then(response => response.json())
      .then(parsedResponse => {
        // this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
