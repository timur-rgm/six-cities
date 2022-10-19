import {OffersType} from '../mocks/offers';

export enum ActionType {
  ChangeCity = 'changeCity',
  EnterOffers = 'enterOffers',
  ChooseOffersByCity = 'chooseOffersByCity',
  GetActiveOfferId = 'getActiveOfferId',
  ResetState = 'resetState',
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type EnterOffersActionType = {
  type: ActionType.EnterOffers,
}

export type ChooseOffersByCityActionType = {
  type: ActionType.ChooseOffersByCity,
  payload: OffersType,
}

export type GetActiveOfferIdType = {
  type: ActionType.GetActiveOfferId,
  payload: number,
}

export type Actions =
  | ChangeCityActionType
  | EnterOffersActionType
  | ChooseOffersByCityActionType
  | GetActiveOfferIdType;
