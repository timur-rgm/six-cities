import {Route, Routes} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OtherPlace from './other-place';
import {makeFakeOffer} from '../../utils/mocks';
import {AppRoute} from '../../const';

const history = createMemoryHistory();
const mockStore = configureMockStore();

const fakeOffer = makeFakeOffer();

describe('Component: OtherPlace', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <HistoryRouter history={history}>
          <OtherPlace offer={fakeOffer} />
        </HistoryRouter>
      </Provider>
    );
    
    expect(screen.getByAltText('Place image')).toBeInTheDocument();
  });

  it('should redirect to "/offer/id" when user click on title link', async () => {
      history.push(AppRoute.Offer);
  
      render(
        <Provider store={mockStore({})}>
          <HistoryRouter history={history}>
            <Routes>
              <Route
                path={AppRoute.Offer}
                element={<OtherPlace offer={fakeOffer} />}
              />
              <Route
                path={`${AppRoute.Offer}/1`}
                element={<h1>This is other Offer page</h1>}
              />
            </Routes>
          </HistoryRouter>
        </Provider>
      );
      
      expect(screen.queryByText(/This is other Offer page/i)).not.toBeInTheDocument();
      await userEvent.click(screen.getByTestId('other-place-title-link'));
      expect(screen.getByText(/This is other Offer page/i)).toBeInTheDocument();
    });
});
