import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoritesEmpty from './favorites-empty';

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
});