
import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './App';

import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
      <Provider store={store}>
        <Counter/>
      </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));


