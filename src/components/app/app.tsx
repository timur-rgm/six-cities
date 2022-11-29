import {useSelector} from 'react-redux';
import {getLoadedOffersStatus} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import MainEmpty from '../main-empty/main-empty';
import FavoritesList from '../favorites-list/favorites-list';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import {AppRoute, AuthorizationStatus} from '../../const';

function App(): JSX.Element {
  const isOffersLoaded = useSelector(getLoadedOffersStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (!isOffersLoaded) {
    return <MainEmpty />;
  }

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={
        <PrivateRoute
          isLoggedIn={authorizationStatus !== AuthorizationStatus.Auth}
          url={AppRoute.Root}
          children={<Login />}
        />
      } />
      <Route path='/offer/:offerId' element={<Offer />} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute
          isLoggedIn={authorizationStatus === AuthorizationStatus.Auth}
          url={AppRoute.Login}
          children={<FavoritesList />}
        />
      } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
