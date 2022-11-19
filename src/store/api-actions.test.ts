import thunk, {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from '@reduxjs/toolkit';
import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {createApi} from '../services/api';
import {
  loadOffers,
  loadOtherPlacesById,
  loadReviewsById,
  redirectToRoute,
  requireAuthorization,
  requireLogout,
  setUserData,
  updateFavorites
} from './action';
import {
  getOffersAction,
  checkAuthAction,
  loginAction,
  logoutAction,
  getOtherPlacesByIdAction,
  getReviewByIdAction,
  updateFavoritesAction,
  postReviewAction,
} from './api-actions';
import {makeFakeUnadaptedOffer, makeFakeUnadaptedOffers, makeFakeUnadaptedReviews} from '../utils/mocks';
import {AuthDataType} from '../types/auth-data';
import {RootStateType} from './root-reducer';
import {adaptOfferToClient, adaptReviewToClient} from '../utils';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';

describe('Api actions', () => {
  const onFakeAuthorized = jest.fn();
  const api = createApi(onFakeAuthorized());
  const mockApi = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  
  const mockStore = configureMockStore<
  RootStateType,
  AnyAction,
  ThunkDispatch<RootStateType, typeof api, AnyAction>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockApi
      .onGet(ApiRoute.Login)
      .reply(200, {email: 'test@test.com'});

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      setUserData({email: 'test@test.com'}),
    ]);
  })

  it('should dispatch requireAuthorization and redirectToRoute when POST /login', async () => {
    const fakeUser: AuthDataType = {login: 'test@test.com', password: '12345678'};
    const store = mockStore();
    Storage.prototype.setItem = jest.fn();
    mockApi
      .onPost(ApiRoute.Login)
      .reply(200, {token: 'secret'});

    await store.dispatch(loginAction(fakeUser));

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      setUserData({email: 'test@test.com'}),
      redirectToRoute(AppRoute.Root),
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch requireLogout when Delete /logout', async () => {
    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();
    mockApi
      .onDelete(ApiRoute.Logout)
      .reply(204);

    await store.dispatch(logoutAction());

    expect(store.getActions()).toEqual([requireLogout()]);
    
    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch getOffersAction when GET /hotels', async () => {
    const fakeUnadaptedOffers = makeFakeUnadaptedOffers();
    const store = mockStore();
    mockApi
      .onGet(ApiRoute.Hotels)
      .reply(200, fakeUnadaptedOffers);

    await store.dispatch(getOffersAction());

    expect(store.getActions()).toEqual([loadOffers(fakeUnadaptedOffers.map(adaptOfferToClient))]);
  });

  it('should dispatch getOtherPlacesByIdAction when GET /hotels/id/nearby', async () => {
    const fakeUnadaptedOtherPlaces = makeFakeUnadaptedOffers();
    const store = mockStore();
    mockApi
      .onGet(`${ApiRoute.Hotels}/1/nearby`)
      .reply(200, fakeUnadaptedOtherPlaces);

    await store.dispatch(getOtherPlacesByIdAction(1));

    expect(store.getActions()).toEqual([loadOtherPlacesById(fakeUnadaptedOtherPlaces.map(adaptOfferToClient))]);
  });
  
  it('should dispatch getReviewByIdAction when GET /comments/id', async () => {
    const fakeUnadaptedReviews = makeFakeUnadaptedReviews();
    const store = mockStore();
    mockApi
      .onGet(`${ApiRoute.Comments}/1`)
      .reply(200, fakeUnadaptedReviews);

    await store.dispatch(getReviewByIdAction(1));

    expect(store.getActions()).toEqual([loadReviewsById(fakeUnadaptedReviews.map(adaptReviewToClient))]);
  });
  
  it('should dispatch updateFavoritesAction when POST /favorite/id/status', async () => {
    const fakeUnadaptedOffer = makeFakeUnadaptedOffer();
    const store = mockStore();
    mockApi
      .onPost(`${ApiRoute.Favorites}/1/1`)
      .reply(200, fakeUnadaptedOffer);

    await store.dispatch(updateFavoritesAction(1, 1))
      .then(() => adaptOfferToClient(fakeUnadaptedOffer))
      .then((offer) => expect(store.getActions()).toEqual([updateFavorites(offer)]));
  });

  it('should dispatch postReviewAction when POST /comments/id', async () => {
    const fakeUnadaptedReviews = makeFakeUnadaptedReviews();
    const fakeComment = {
      comment: 'text',
      rating: '5',
    };

    const store = mockStore();
    mockApi
      .onPost(`${ApiRoute.Comments}/1`)
      .reply(200, fakeUnadaptedReviews);

    await store.dispatch(postReviewAction(fakeComment, 1))
      .then(() => fakeUnadaptedReviews.map((review) => adaptReviewToClient(review)))
      .then((reviews) => expect(store.getActions()).toEqual([loadReviewsById(reviews)]));
  });
});
