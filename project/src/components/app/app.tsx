import {BrowserRouter, Switch, Route} from 'react-router-dom'

import {AppRoute} from '../../const';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Offer from '../offer/offer';

type AppProps = {
  placesCount: number,
}

export default function App({placesCount}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <Main placesCount={placesCount} />
        </Route>
        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>
        <Route exact path={AppRoute.Offer}>
          <Offer />
        </Route>
        <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
