import {connect, ConnectedProps} from 'react-redux';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom'
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
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path="/offer/:1">
          <Offer 
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
        >
        </PrivateRoute>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
