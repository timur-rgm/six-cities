import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Sorting from './sorting';
import {SortingType} from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  PROCESS: {
    currentSortingType: SortingType.Popular,
  },
});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Sorting />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('sorting-form')).toBeInTheDocument();
    expect(screen.getAllByTestId('sorting-list-item')).toHaveLength(Object.values(SortingType).length)
  });
});
