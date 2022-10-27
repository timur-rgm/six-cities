import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {OffersType} from '../mocks/offers';
import {AuthorizationStatus} from '../const';
import {State} from './state';
import {AxiosInstance} from 'axios';
import {SortingType} from './offers';

export enum ActionType {
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadOffers = 'loadOffers',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
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

export type Actions =
  | SetActiveOfferIdType
  | ChangeCityActionType
  | ChangeSortingType
  | LoadOffersType
  | RequireAuthorizationType
  | RequireLogoutType;

export type ThunkActionResultType<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatchType = ThunkDispatch<State, AxiosInstance, Actions>;
