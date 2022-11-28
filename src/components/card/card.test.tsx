import {fireEvent, render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Card from './card';
import {makeFakeOffer} from '../../utils/mocks';
import {AppRoute} from '../../const';
import {Route, Routes} from 'react-router-dom';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffer = makeFakeOffer();

describe('Component: Card', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Card 
            offer={fakeOffer}
            setActiveOfferId={jest.fn()}
          />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByAltText(/Place image/i)).toBeInTheDocument();
  });

  it('should redirect to "/offer/id" when user click on article title', () => {
    history.push(AppRoute.Root);

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={AppRoute.Root} element={
              <Card 
                offer={fakeOffer}
                setActiveOfferId={jest.fn()}
              />
            } />
            <Route path={`${AppRoute.Offer}/${fakeOffer.id}`} element={<h1>This is Offer page</h1>} />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText(/This is Offer page/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('card-title'));
    expect(screen.getByText(/This is Offer page/i)).toBeInTheDocument();
  });

  it('should set activeOfferId when user enter mouse on article', () => {
    const articleMouseEnterHandle = jest.fn();

    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <Card 
            offer={fakeOffer}
            setActiveOfferId={articleMouseEnterHandle}
          />
        </HistoryRouter>
      </Provider>
    );

    fireEvent.mouseEnter(screen.getByTestId('card-article'));
    expect(articleMouseEnterHandle).toBeCalled();
  });
});
