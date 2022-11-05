import {connect, ConnectedProps} from 'react-redux';
import {Route, Routes} from 'react-router-dom'
import HistoryRouter from '../history-router/history-router';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from '../../const';
import {State} from '../../types/state';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';

const mapStateToProps = ({offers, isOffersLoaded}: State) => ({
  offers,
  isOffersLoaded: isOffersLoaded,
})

const connector = connect(mapStateToProps);

type AppProps = {
  reviews: ReviewsType,
}

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & AppProps;

function App({offers, reviews, isOffersLoaded}: ConnectedComponentPropsType): JSX.Element {

  if (!isOffersLoaded) {
    return (
      <LoadingScreen />
    )
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path="/offer/:id" element={<Offer />} />
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

export default connector(App);
