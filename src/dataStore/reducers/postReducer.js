import { FETCH_POSTS, NEW_POSTS} from '../actions/types.js';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    // case FETCH_POSTS
    default:
      return state;
  }
}