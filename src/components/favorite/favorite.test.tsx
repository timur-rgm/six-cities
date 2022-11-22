import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Favorite from './favorite';
import {makeFakeOffers} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const offers = makeFakeOffers();

describe('Component: Favorite', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Favorite favoritesByCity={offers}/>
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('favorites-places')).toBeInTheDocument();
    expect(screen.getAllByTestId('favorite-card')).toHaveLength(offers.length);
  });
});