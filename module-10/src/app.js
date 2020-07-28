import posts from './menu.json';
import postItem from './templates/post-item.hbs';

const refs = {
  postFeed: document.querySelector('.js-menu'),
};

function buildPost(posts) {
  const markup = posts.map(post => postItem(post)).join('');
  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}
buildPost(posts);
