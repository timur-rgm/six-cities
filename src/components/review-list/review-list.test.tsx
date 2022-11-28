import React from 'react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import ReviewList from './review-list';
import {makeFakeReviews} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    reviews: makeFakeReviews(),
    isRevewsLoaded: true,
  },

  PROCESS: {
    activeOfferId: 1,
  },

  USER: {
    authorizationStatus: 'AUTH',
  },
});

describe('Component: ReviewList', () => {
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
          <ReviewList id={1}/>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('reviews-container')).toBeInTheDocument();
  });
});
