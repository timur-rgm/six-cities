import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {createApi} from './services/api';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

// const api = createApi();

const store = createStore(
  reducer,
  composeWithDevTools(),
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App
      offers={offers}
      reviews={reviews}
    />
  </Provider>
);
