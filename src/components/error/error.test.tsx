import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Error from './error';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  PROCESS: {
    currentCity: 'Paris'
  },

  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: Error', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Error />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Sorry, the page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/To main page/i)).toBeInTheDocument();
  });
});
