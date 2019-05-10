import React from 'react';
import './App.css';
import Posts from './components/Posts.js'
import Postform from './components/Postform.js'

function App() {
  return (
    <div className="App">
      <Postform />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
