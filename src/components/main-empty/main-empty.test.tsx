import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import MainEmpty from './main-empty';

const history = createMemoryHistory();

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    render(
      <HistoryRouter history={history}>
        <MainEmpty />
      </HistoryRouter>
    );
    
    expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  });
});
