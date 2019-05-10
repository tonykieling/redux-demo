import { FETCH_POSTS, NEW_POSTS} from './types.js';

// export const fetchPosts = () => dispatch => {
  //get ride of return... inside the function
// }

export function fetchPosts() {
  console.log('fetching')
  return function(dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts
    }));
  }
}

