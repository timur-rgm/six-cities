import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import OtherPlace from './other-place';
import {makeFakeOffer} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffer = makeFakeOffer();
const onArticleCLickHandle = jest.fn();

describe('Component: OtherPlace', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <OtherPlace
            offer={fakeOffer}
            onArticleCLick={onArticleCLickHandle}
          />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByAltText('Place image')).toBeInTheDocument();
  });
});