import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {AppRoute, AuthorizationStatus} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';
import Error from '../error/error';
import PrivateRoute from '../private-route/private-route';
import {OffersType} from '../../mocks/offers';

type AppProps = {
  placesCount: number,
  offers: OffersType,
}

export default function App({placesCount, offers}: AppProps): JSX.Element {

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
        <Route exact path={AppRoute.Offer}>
          <Offer />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
