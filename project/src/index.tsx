import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  PLACES_COUNT: 5,
};

const store = createStore(
  reducer,
  composeWithDevTools()
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App
      placesCount={Setting.PLACES_COUNT}
      offers={offers}
      reviews={reviews}
    />
  </Provider>
);
