import {fireEvent, render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Card from './card';
import {makeFakeOffer} from '../../utils/mocks';
import {AppRoute} from '../../const';
import {Route, Routes} from 'react-router-dom';
import {setActiveOfferId} from '../../store/action';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffer = makeFakeOffer();

describe('Component: Card', () => {
  beforeEach(() => {
    history.push(AppRoute.Root);
  });

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

  it('when user click on article title should redirect', () => {
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
            <Route path={`${AppRoute.Offer}/${fakeOffer.id}`} element={
              <h1>Offer page</h1>
            } />
          </Routes>
          
        </HistoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('card-title'));
    expect(screen.getByText(/Offer page/i)).toBeInTheDocument();
  });

  it('should dispatch setActiveOfferId when user enter mouse on article', () => {
    const store = mockStore({
      PROCESS: {
        activeOfferId: 0,
      }
    });

    const articleMouseEnterHandle = jest.fn(
      () => store.dispatch(setActiveOfferId(1))
    );

    render(
      <Provider store={store}>
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
    expect(store.getActions()).toEqual([setActiveOfferId(1)]);
  });
});
