import ReactDOM from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {reducer} from './store/reducer';
import {rootReducer} from './store/root-reducer';
import {requireAuthorization} from './store/action';
import App from './components/app/app';
import {createApi} from './services/api';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import {AuthorizationStatus} from './const';
import {reviews} from './mocks/reviews';
import {ThunkAppDispatchType} from './types/action';
import {redirect} from './store/middlewares/redirect';

const api = createApi(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatchType)(checkAuthAction());
(store.dispatch as ThunkAppDispatchType)(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App reviews={reviews} />
  </Provider>
);
