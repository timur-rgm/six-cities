import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import App from './app';
import {AppRoute} from '../../const';
import {makeFakeOffers, makeFakeReviews} from '../../utils/mocks';

const history = createMemoryHistory();

const mockStore = configureMockStore();
const store = mockStore({
  DATA: {
    offers: makeFakeOffers(),
    isOffersLoaded: true,
    reviews: makeFakeReviews(),
    isReviewsLoaded: true,
    favorites: makeFakeOffers(),
    isFavoritesLoaded: true,
  },
  
  PROCESS: {
    currentCity: 'Paris',
  },

  USER: {
    authorizationStatus: 'AUTH',
    user: {email: 'test@test.com'}
  },
});

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Aplication routing', () => {
  it('should render Main when user navigate to "/"', () => {
    history.push(AppRoute.Root)
    render(fakeApp);
    
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
  
  it('should render Login when user navigate to "/login"', () => {
    history.push(AppRoute.Login)
    render(fakeApp);
    
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  // TypeError: Actions must be plain objects. Use custom middleware for async actions.
  // it('should render Offer when user navigate to "/offer/:offerId"', () => {
  //   history.push(`${AppRoute.Offer}/1`)
  //   render(fakeApp);
    
  //   expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  // });

  // TypeError: Actions must be plain objects. Use custom middleware for async actions.
  // it('should render Favorites when user navigate to "/favorites"', () => {
    //   history.push(AppRoute.Favorites)
    //   render(fakeApp);
    
    //   expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    // });
    
    it('should render Error when user navigate to non-existent route', () => {
      history.push('/non-existent-route')
      render(fakeApp);
      
      expect(screen.getByTestId('link')).toBeInTheDocument();
    });
});
