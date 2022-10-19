import {OffersType} from '../mocks/offers';

export enum ActionType {
  ChangeCity = 'changeCity',
  EnterOffers = 'enterOffers',
  ChooseOffersByCity = 'chooseOffersByCity',
  ResetState = 'resetState',
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type EnterOffersActionType = {
  type: ActionType.EnterOffers,
  // payload: OffersType,
}

export type ChooseOffersByCityActionType = {
  type: ActionType.ChooseOffersByCity,
  payload: OffersType,
}

export type Actions =
  | ChangeCityActionType
  | EnterOffersActionType
  | ChooseOffersByCityActionType;
