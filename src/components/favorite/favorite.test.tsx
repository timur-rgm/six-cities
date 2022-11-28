import {Route, Routes} from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Favorite from './favorite';
import {makeFakeOffers} from '../../utils/mocks';
import { AppRoute } from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({})
const offers = makeFakeOffers();

describe('Component: Favorite', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Favorite favoritesByCity={offers}/>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('favorites-places')).toBeInTheDocument();
    expect(screen.getAllByTestId('favorite-card')).toHaveLength(offers.length);
  });

  it('should redirect to "/offer/id" when user click on link', () => {
    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>  
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Favorites} element={<Favorite favoritesByCity={offers}/>} />
            <Route path={`${AppRoute.Offer}/1`} element={<h1>This is offer page</h1>} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.queryByText(/This is offer page/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('favorite-card-link'));
    expect(screen.getByText(/This is offer page/i)).toBeInTheDocument();
  });
});
