import {
  loadOffers,
  loadOtherPlacesById,
  loadReviewsById,
  loadFavorites,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  setUserData,
} from '../store/action';
import {saveToken, dropToken, TokenType} from '../services/token';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptOfferToClient, adaptReviewToClient} from '../utils';
import {ThunkActionResultType} from '../types/action';
import {AuthDataType} from '../types/auth-data';
import {UnadaptedOfferType} from '../types/offers';
import {UnadaptedReviewType, SentReviewType} from '../types/reviews';

export function getOffersAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<UnadaptedOfferType[]>(ApiRoute.Hotels);
    dispatch(loadOffers(data.map(adaptOfferToClient)));
  }
}

export function getOtherPlacesByIdAction(id: number): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<UnadaptedOfferType[]>(`${ApiRoute.Hotels}/${id}/nearby`);
    dispatch(loadOtherPlacesById(data.map(adaptOfferToClient)));
  }
}

export function getReviewByIdAction(id: number): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<UnadaptedReviewType[]>(`${ApiRoute.Comments}/${id}`);
    dispatch(loadReviewsById(data.map((review) => adaptReviewToClient(review))));
  }
}

export function getFavoritesAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<UnadaptedOfferType[]>(ApiRoute.Favorites);
    dispatch(loadFavorites(data.map(adaptOfferToClient)));
  }
}

export function postReviewAction({comment, rating}: SentReviewType, id: number): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    await api.post(`${ApiRoute.Comments}/${id}`, {comment, rating})
      .then(({data}) => data.map((unadaptedReview: UnadaptedReviewType) => adaptReviewToClient(unadaptedReview)))
      .then((reviews) => dispatch(loadReviewsById(reviews)))
      .catch((err) => {
        throw err;
      })
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
    dispatch(setUserData({email: email}));
    dispatch(redirectToRoute(AppRoute.Root));
  }
}

export function logoutAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  }
}
