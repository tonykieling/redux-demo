import { FETCH_POSTS, NEW_POSTS} from '../actions/types.js';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      console.log("postReducer.js");
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}