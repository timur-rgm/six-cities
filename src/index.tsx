import ReactDOM from 'react-dom/client';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import {createApi} from './services/api';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {reviews} from './mocks/reviews';
import {redirect} from './store/middlewares/redirect';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App reviews={reviews} />
  </Provider>
);
