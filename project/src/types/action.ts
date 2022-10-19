import {OffersType} from '../mocks/offers';

export enum ActionType {
  EnterOffers = 'enterOffers',
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChooseOffersByCity = 'chooseOffersByCity',
  SortВуDefault = 'sortВуDefault',
  SortByPriceToHigh = 'sortByPriceToHigh',
  SortByPriceToLow = 'sortByPriceToLow',
  SortByRateToLow = 'sortByRateToLow'
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

export type Actions =
  | EnterOffersActionType
  | SetActiveOfferIdType
  | ChangeCityActionType
  | ChooseOffersByCityActionType
  | SortByPriceToHighType
  | SortByPriceToLowType
  | SortByRateToLowType;
