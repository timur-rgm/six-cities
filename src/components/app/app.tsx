import {useSelector} from 'react-redux';
import {getOffers, getLoadedOffersStatus} from '../../store/data/selectors';
import {Route, Routes} from 'react-router-dom'
import HistoryRouter from '../history-router/history-router';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import MainEmpty from '../main-empty/main-empty';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';

function App(): JSX.Element {
  const offers = useSelector(getOffers);
  const isOffersLoaded = useSelector(getLoadedOffersStatus);

  if (!isOffersLoaded) {
    return (
      <MainEmpty />
    )
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path='/offer/:id' element={<Offer />} />
        <Route path={AppRoute.Favorites} element={
          <PrivateRoute>
            <Favorites offers={offers} />
          </PrivateRoute>
        } />
        <Route path="*" element={<Error />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
