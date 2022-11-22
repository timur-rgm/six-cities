import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Header from './header';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: Header', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByAltText('6 cities logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
  });
});