import {
  ActionType,
  ChangeCityActionType,
  EnterOffersActionType,
  ChooseOffersByCityActionType,
  GetActiveOfferIdType, } from '../types/action';
import {OffersType} from '../mocks/offers';

export const changeCity = (city: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const enterOffers = (): EnterOffersActionType => ({
  type: ActionType.EnterOffers,
});

export const chooseOffersByCity = (offers: OffersType): ChooseOffersByCityActionType => ({
  type: ActionType.ChooseOffersByCity,
  payload: offers,
});

export const getActiveOfferId = (id: number): GetActiveOfferIdType => ({
  type: ActionType.GetActiveOfferId,
  payload: id,
})
