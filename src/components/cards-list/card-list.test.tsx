import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import CardList from './cards-list';
import {makeFakeOffers} from '../../utils/mocks';
import {SortingType} from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
  },

  PROCESS: {
    currentSortingType: SortingType.Popular,
  },
});

describe('Component: CardList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardList />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('places-list')).toBeInTheDocument();
  });
});
