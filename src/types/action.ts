import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {RootStateType} from '../store/root-reducer';
import {AuthorizationStatus, SortingType, AppRoute} from '../const';
import {OffersType} from './offers';
import {ReviewsType, SentReviewType} from './reviews';

export enum ActionType {
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadOffers = 'loadOffers',
  LoadOtherPlacesById = 'loadOtherPlacesById',
  LoadReviewsById = 'loadReviewsById',
  SendReview = 'sendReview',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
  RedirectToRoute = 'redirectToRoute',
  SetUserData = 'setUserData',
}

export type SetActiveOfferIdType = {
  type: ActionType.SetActiveOfferId,
  payload: number,
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type ChangeSortingType = {
  type: ActionType.ChangeSorting,
  payload: SortingType,
}

export type LoadOffersType = {
  type: ActionType.LoadOffers,
  payload: OffersType,
}

export type LoadOtherPlacesByIdType = {
  type: ActionType.LoadOtherPlacesById,
  payload: OffersType,
}

export type LoadReviewsByIdType = {
  type: ActionType.LoadReviewsById,
  payload: ReviewsType,
}

export type SendReviewType = {
  type: ActionType.SendReview,
  payload: SentReviewType,
}

export type RequireAuthorizationType = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
}

export type RequireLogoutType = {
  type: ActionType.RequireLogout,
}

export type RedirectToRouteType = {
  type: ActionType.RedirectToRoute,
  payload: AppRoute,
}

export type SetUserDataType = {
  type: ActionType.SetUserData,
  payload: {email: string},
}

export type Actions =
  | SetActiveOfferIdType
  | ChangeCityActionType
  | ChangeSortingType
  | LoadOffersType
  | LoadOtherPlacesByIdType
  | LoadReviewsByIdType
  | SendReviewType
  | RequireAuthorizationType
  | RequireLogoutType
  | RedirectToRouteType
  | SetUserDataType;

export type ThunkActionResultType<R = Promise<void>> = ThunkAction<R, RootStateType, AxiosInstance, Actions>;

export type ThunkAppDispatchType = ThunkDispatch<RootStateType, AxiosInstance, Actions>;
