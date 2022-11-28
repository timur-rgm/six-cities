import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {fireEvent, render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Error from './error';
import {AppRoute} from '../../const';

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

  it('should redirect to "/" when user click on link', () => {
    history.push('/non-existent-page');

    render(
      <Provider store={store}>  
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Root} element={<h1>This is main page</h1>} />
            <Route path="/non-existent-page" element={<Error />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
