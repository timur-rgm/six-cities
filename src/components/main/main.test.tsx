import React from 'react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Main from './main';
import {SortingType} from '../../const';
import { makeFakeOffers } from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    favorites: makeFakeOffers(),
    isFavoritesLoaded: true,
  },

  PROCESS: {
    currentCity: 'Paris',
    activeOfferId: 1,
    currentSortingType: SortingType.Popular,
  },

  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: Main', () => {
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
          <Main />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
});
