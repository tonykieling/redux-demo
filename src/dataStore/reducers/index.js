import { combinedReducers} from 'redux';
import postReducer from './postReducer';

export default combinedReducers({
  posts: postReducer
});