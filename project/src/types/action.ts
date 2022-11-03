import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {AuthorizationStatus, SortingType, AppRoute} from '../const';
import {OffersType} from './offers';

export enum ActionType {
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadOffers = 'loadOffers',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
  RedirectToRoute = 'redirectToRoute',
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

export type Actions =
  | SetActiveOfferIdType
  | ChangeCityActionType
  | ChangeSortingType
  | LoadOffersType
  | RequireAuthorizationType
  | RequireLogoutType
  | RedirectToRouteType;

export type ThunkActionResultType<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatchType = ThunkDispatch<State, AxiosInstance, Actions>;
