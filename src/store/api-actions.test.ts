import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createApi} from '../services/api';
import {RootStateType} from './root-reducer';
import {AnyAction} from '@reduxjs/toolkit';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setUserData
} from './action';
import {
  getOffersAction,
  checkAuthAction,
  loginAction,
} from './api-actions';
import {AuthDataType} from '../types/auth-data';
import {makeFakeUnadaptedOffers} from '../utils/mocks';
import {adaptOfferToClient} from '../utils';

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

  it('should dispatch getOffersAction when GET /hotels', async () => {
    const fakeOffers = makeFakeUnadaptedOffers();
    const store = mockStore();
    mockApi
      .onGet(ApiRoute.Hotels)
      .reply(200, fakeOffers);

    await store.dispatch(getOffersAction());

    expect(store.getActions()).toEqual([
      loadOffers(fakeOffers.map(adaptOfferToClient)),
    ]);
  })

});