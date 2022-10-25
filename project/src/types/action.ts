import {OffersType} from '../mocks/offers';
import {AuthorizationStatus} from '../const';

export enum ActionType {
  EnterOffers = 'enterOffers',
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChooseOffersByCity = 'chooseOffersByCity',
  SortВуDefault = 'sortВуDefault',
  SortByPriceToHigh = 'sortByPriceToHigh',
  SortByPriceToLow = 'sortByPriceToLow',
  SortByRateToLow = 'sortByRateToLow',
  LoadOffers = 'loadOffers',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
}

export type EnterOffersActionType = {
  type: ActionType.EnterOffers,
}

export type SetActiveOfferIdType = {
  type: ActionType.SetActiveOfferId,
  payload: number,
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type ChooseOffersByCityActionType = {
  type: ActionType.ChooseOffersByCity,
  payload: OffersType,
}

export type SortВуDefaultType = {
  type: ActionType.SortВуDefault,
}

export type SortByPriceToHighType = {
  type: ActionType.SortByPriceToHigh,
}

export type SortByPriceToLowType = {
  type: ActionType.SortByPriceToLow,
}

export type SortByRateToLowType = {
  type: ActionType.SortByRateToLow,
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
  | EnterOffersActionType
  | SetActiveOfferIdType
  | ChangeCityActionType
  | ChooseOffersByCityActionType
  | SortByPriceToHighType
  | SortByPriceToLowType
  | SortByRateToLowType
  | LoadOffersType
  | RequireAuthorizationType
  | RequireLogoutType;
