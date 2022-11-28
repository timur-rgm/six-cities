import {Route, Routes} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './header';
import {AppRoute} from '../../const';

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

  it('should redirect to "/favorites" when user click on header user link', async () => {
    history.push(AppRoute.Root);

    render(
      <Provider store={store}>
         <HistoryRouter history={history}>
            <Routes>
              <Route path={AppRoute.Root} element={<Header />} />
              <Route path={AppRoute.Favorites} element={<h1>This is Favorites page</h1>} />
            </Routes>
          </HistoryRouter>
      </Provider>
    )

    expect(screen.queryByText(/This is Favorites page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByTestId('header-user-link'));
    expect(screen.getByText(/This is Favorites page/i)).toBeInTheDocument();
  });

  // it('should redirect to "/" when user click on header signout link', async () => {
  //   history.push(AppRoute.Favorites);

  //   render(
  //     <Provider store={store}>
  //        <HistoryRouter history={history}>
  //           <Routes>
  //             <Route path={AppRoute.Root} element={<h1>This is Main page</h1>} />
  //             <Route path={AppRoute.Favorites} element={<Header />} />
  //           </Routes>
  //         </HistoryRouter>
  //     </Provider>
  //   )

  //   expect(screen.queryByText(/This is Main page/i)).not.toBeInTheDocument();
  //   await fireEvent.click(screen.getByTestId('header-signout-link'));
  //   expect(screen.getByText(/This is Main page/i)).toBeInTheDocument();
  // });

  it('should redirect to "/login" when user click on header signin link', async () => {
    history.push(AppRoute.Root);

    const store = mockStore({
      USER: {
        authorizationStatus: 'NOAUTH',
        user: {email: 'test@test.com'}
      },
    });

    render(
      <Provider store={store} >
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Root} element={<Header />} />
            <Route path={AppRoute.Login} element={<h1>This is Login page</h1>} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/This is Login page/i)).not.toBeInTheDocument();
    await userEvent.click(screen.getByTestId('header-signin-link'));
    expect(screen.getByText(/This is Login page/i)).toBeInTheDocument();
  });
});
