import photoService from './services/photo-services';
import articleListItemsTemplates from '../templates/image.hbs';
const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector("button[data-action='load-more']"),
};
refs.searchForm.addEventListener('input', inputSearch);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
function inputSearch(e) {
  const inputValue = e.target.value;
  clearListItems();

  photoService.searchQuery = inputValue;
  photoService
    .fetchArticles()
    .then(data => {
      const markup = buildListItemsMarkup(data);
      insertListItems(markup);
      photoService.resetPage();
    })
    .catch(error => console.warn(error));
}
function loadMoreBtnHandler(e) {
  e.preventDefault();
  photoService.incrementPage();
  photoService
    .fetchArticles()
    .then(data => {
      const markup = buildListItemsMarkup(data);
      insertListItems(markup);
    })
    .then(() => {
      const position = refs.loadMoreBtn.offsetTop;
      window.scrollTo({
        top: position - 1500,
        behavior: 'smooth',
      });
    })
    .catch(error => console.warn(error));
}
function insertListItems(items) {
  refs.articleList.insertAdjacentHTML('beforeend', items);
}

function buildListItemsMarkup(items) {
  return articleListItemsTemplates(items);
}
function clearListItems() {
  refs.articleList.innerHTML = '';
}
