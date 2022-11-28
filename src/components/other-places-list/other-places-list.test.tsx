import React from 'react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import OtherPlacesList from './other-places-list';
import {makeFakeOffers} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    otherPlaces: makeFakeOffers(),
    isOtherPlacesLoaded: true,
  },
});

describe('Component: OtherPlacesList', () => {
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
          <OtherPlacesList id={1}/>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('other-places-container')).toBeInTheDocument();
  });
});
