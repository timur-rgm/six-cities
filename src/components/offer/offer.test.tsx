import React from 'react';
import {Route, Routes} from 'react-router-dom';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Offer from './offer';
import {makeFakeOffers, makeFakeReviews} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    reviews: makeFakeReviews(),
    favorites: makeFakeOffers(),
    isFavoritesLoaded: true,
  },

  PROCESS: {
    activeOfferId: 0,
  },

  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

describe('Component: Offer', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should render correctly', () => {
    history.push('/offer/1');

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path='/offer/:offerId' element={<Offer />} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getAllByAltText(/Photo studio/i)).toHaveLength(6);
    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  });
});
