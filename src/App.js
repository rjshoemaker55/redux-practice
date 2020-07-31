import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store.js';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
