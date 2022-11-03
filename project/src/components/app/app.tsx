import {connect, ConnectedProps} from 'react-redux';
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from '../private-route/private-route';
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

const mapStateToProps = ({isOffersLoaded}: State) => ({
  isOffersLoaded: isOffersLoaded,
})

const connector = connect(mapStateToProps);

type AppProps = {
  offers: OffersType,
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
    <Routes>
      <Route path={AppRoute.Root} element={<Main />} />
      <Route path={AppRoute.Login} element={<Login />} />
      <Route path="/offer/:1" element={<Offer offers={offers} reviews={reviews}/>} />
      <Route path={AppRoute.Favorites} element={
        <PrivateRoute>
          <Favorites offers={offers} />
        </PrivateRoute>
      } />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default connector(App);
