import {ActionType, ChangeCityActionType, WriteOffersActionType} from '../types/action';
import {OffersType} from '../mocks/offers';

export const changeCity = (city: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const writeOffers = (offers: OffersType): WriteOffersActionType => ({
  type: ActionType.WriteOffers,
  payload: offers,
});
