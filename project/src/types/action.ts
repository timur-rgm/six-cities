import {OffersType} from '../mocks/offers';

export enum ActionType {
  ChangeCity = 'changeCity',
  WriteOffers = 'writeOffers',
}

export type ChangeCityActionType = {
  type: ActionType.ChangeCity,
  payload: string,
}

export type WriteOffersActionType = {
  type: ActionType.WriteOffers,
  payload: OffersType,
}
