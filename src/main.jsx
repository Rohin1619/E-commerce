import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import { fetchProducts } from './stores/slices/productsSlice';

async function initializeApp() {
  await store.dispatch(fetchProducts());

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
      <BrowserRouter>
          <App />
      </BrowserRouter>
        
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

initializeApp();
