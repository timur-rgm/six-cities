import ReactDOM from 'react-dom/client';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {getOffersAction, checkAuthAction} from './store/api-actions';
import App from './components/app/app';
import {createApi} from './services/api';
import {AuthorizationStatus} from './const';
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
store.dispatch(getOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);
