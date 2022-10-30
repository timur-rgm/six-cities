import {
  loadOffers,
  requireAuthorization,
  requireLogout,
} from '../store/action';
import {saveToken, dropToken, TokenType} from '../services/token';
import {ApiRoute, AuthorizationStatus} from '../const';
import {adaptToClient} from '../utils';
import {ThunkActionResultType} from '../types/action';
import {AuthDataType} from '../types/auth-data';
import {UnadaptedOfferType} from '../types/offers';

export function fetchOffersAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<UnadaptedOfferType[]>(ApiRoute.Hotels);
    dispatch(loadOffers(data.map(adaptToClient)));
  }
}

export function checkAuthAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    await api.get(ApiRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      })
  }
}

export function loginAction({login: email, password}: AuthDataType): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data: {token}} = await api.post<{token: TokenType}>(ApiRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
}

export function logoutAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  }
}
