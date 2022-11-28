import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './login';

const history = createMemoryHistory();
const mockStore = configureMockStore();

describe('Component: Login', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Login />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('password-input')).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('email-input'), 'test@test.com');
    await userEvent.type(screen.getByTestId('password-input'), '1234567');

    expect(screen.getByDisplayValue(/test@test.com/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/1234567/i)).toBeInTheDocument();
  });
});
