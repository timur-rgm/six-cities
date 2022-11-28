import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewForm from './review-form';

const history = createMemoryHistory();
const mockStore = configureMockStore();
const store = mockStore({
  PROCESS: {
    activeOfferId: 1,
  },
});

describe('Component: ReviewForm', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewForm />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByTestId('reviews-form')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(5);
    expect(screen.getByRole('textbox')).toBeInTheDocument();

    await userEvent.type(screen.getByRole('textbox'), 'some text');
    await userEvent.click(screen.getByTestId('star-image-3'));

    expect(screen.getByDisplayValue(/some text/i)).toBeInTheDocument();
    expect(screen.getByTestId('review-form-input-3')).toBeChecked();
  });
});
