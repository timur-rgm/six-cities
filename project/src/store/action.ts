import {
  ActionType,
  ChangeCityActionType,
  EnterOffersActionType,
  ChooseOffersByCityActionType,
  SortВуDefaultType,
  SetActiveOfferIdType,
  SortByPriceToHighType,
  SortByPriceToLowType,
  SortByRateToLowType, } from '../types/action';
import {OffersType} from '../mocks/offers';

export const enterOffers = (): EnterOffersActionType => ({
  type: ActionType.EnterOffers,
});

export const setActiveOfferId = (id: number): SetActiveOfferIdType => ({
  type: ActionType.SetActiveOfferId,
  payload: id,
})

export const changeCity = (city: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const chooseOffersByCity = (offers: OffersType): ChooseOffersByCityActionType => ({
  type: ActionType.ChooseOffersByCity,
  payload: offers,
});

export const sortByDefault = (): SortВуDefaultType => ({
  type: ActionType.SortВуDefault,
})

export const sortByPriceToHigh = (): SortByPriceToHighType => ({
  type: ActionType.SortByPriceToHigh,
})

export const sortByPriceToLow = (): SortByPriceToLowType => ({
  type: ActionType.SortByPriceToLow,
})

export const sortByRateToLow = (): SortByRateToLowType => ({
  type: ActionType.SortByRateToLow,
})