import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import {OffersType} from '../../mocks/offers';
import {ReviewsType} from '../../mocks/reviews';

type AppProps = {
  placesCount: number,
  offers: OffersType,
  reviews: ReviewsType,
}

export default function App({placesCount, offers, reviews}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main
            placesCount={placesCount}
            offers={offers}
          />
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
