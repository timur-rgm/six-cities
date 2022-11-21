import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import CitiesList from './cities-list';
import {SortingType, Cities} from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  PROCESS: {
    currentSortingType: SortingType.Popular,
  },
});

describe('Component: CitiesList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CitiesList />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('cities-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('cities-item')).toHaveLength(Object.keys(Cities).length);
  });
});
