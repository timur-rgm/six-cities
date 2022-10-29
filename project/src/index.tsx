import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import {createApi} from './services/api';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {ThunkAppDispatchType} from './types/action';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatchType)(fetchOffersAction());
// (store.dispatch as ThunkAppDispatchType)(checkAuthAction());

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
