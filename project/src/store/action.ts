import { ActionType,
         ChangeCityActionType,
         EnterOffersActionType,
         ChooseOffersByCityActionType} from '../types/action';
import {OffersType} from '../mocks/offers';

export const changeCity = (city: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const enterOffers = (): EnterOffersActionType => ({
  type: ActionType.EnterOffers,
  // payload: offers,
});

export const chooseOffersByCity = (offers: OffersType): ChooseOffersByCityActionType => ({
  type: ActionType.ChooseOffersByCity,
  payload: offers,
});
