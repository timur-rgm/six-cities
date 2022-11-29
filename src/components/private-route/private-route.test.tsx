import {Route, Routes} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import PrivateRoute from './private-route';
import HistoryRouter from '../history-router/history-router';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: PrivateRoute', () => {
  beforeEach(() => {
    history.push('/private');
  });

  it('should render component for public route, when user not authorized', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/login" element={<h1>Public route</h1>} />
            <Route path="/private" element={
              <PrivateRoute
                path="/private"
                url="/login"
                isLoggedIn={false}
                children={<h1>Private route</h1>}
              />
            }/>
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Public route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private route/y)).not.toBeInTheDocument();
  });
  
  it('should render component for private route, when user authorized', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path="/login" element={<h1>Public route</h1>} />
            <Route path="/private" element={
              <PrivateRoute
                path="/private"
                url="/login"
                isLoggedIn={true}
                children={<h1>Private route</h1>}
              />
            }/>
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public route/y)).not.toBeInTheDocument();
  });
});
