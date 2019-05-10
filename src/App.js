import React, { Component} from 'react';
import './App.css';
import Posts from './components/Posts.js'
import Postform from './components/Postform.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
