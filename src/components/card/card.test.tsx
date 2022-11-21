import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Card from './card';
import {makeFakeOffer} from '../../utils/mocks';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffer = makeFakeOffer();
const onArticleClickHandle = jest.fn();
const setActiveOfferIdHandle = jest.fn();

describe('Component: Card', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Card 
            offer={fakeOffer}
            onArticleCLick={onArticleClickHandle}
            setActiveOfferId={setActiveOfferIdHandle}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
  });
});
