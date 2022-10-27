import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import PrivateRoute from '../private-route/private-route';
import {OffersType} from '../../mocks/offers';
import {ReviewsType} from '../../mocks/reviews';
import {connect, ConnectedProps} from 'react-redux';

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
    <BrowserRouter>
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
          authorizationStatus={AuthorizationStatus.Auth}
        >
        </PrivateRoute>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default connector(App);
