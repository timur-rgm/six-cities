import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {configureMockStore} from '@jedmao/redux-mock-store';
import FavoritesList from './favorites-list';
import {AppRoute} from '../../const';
import { makeFakeOffers } from '../../utils/mocks';
import { useSelector, useDispatch } from 'react-redux'; 


const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    favorites: makeFakeOffers(),
    isFavoritesLoaded: true,
  },

  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: FavoritesList', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f()); 
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesList />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  // it('should redirect to "/" when user click on link', async () => {
  //   history.push(AppRoute.Favorites);

  //   render(
  //     <Provider store={store}>
  //       <HistoryRouter history={history}>
  //         <Routes>
  //           <Route path={AppRoute.Root} element={<h1>This is Main page</h1>} />
  //           <Route path={AppRoute.Favorites} element={<FavoritesList />} />
  //         </Routes>
  //       </HistoryRouter>
  //     </Provider>
  //   );
    
  //   expect(screen.queryByText(/This is Main page/i)).not.toBeInTheDocument();
  //   await userEvent.click(screen.getByTestId('favorites-list-link'));
  //   expect(screen.getByText(/This is Main page/i)).toBeInTheDocument();
  // });
});
