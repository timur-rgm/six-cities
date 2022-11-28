import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {fireEvent, render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoritesEmpty from './favorites-empty';
import {AppRoute} from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: FavoritesEmpty', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesEmpty />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it('should redirect to "/" when user click on logo link', () => {
    history.push(AppRoute.Favorites);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Root} element={<h1>Main page</h1>} />
            <Route path={AppRoute.Favorites} element={<FavoritesEmpty />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.queryByText(/Main page/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('logo-link'));
    expect(screen.getByText(/Main page/i)).toBeInTheDocument();
  });
});
