import {
  ActionType,
  ChangeCityActionType,
  EnterOffersActionType,
  ChooseOffersByCityActionType,
  SortВуDefaultType,
  SetActiveOfferIdType,
  SortByPriceToHighType,
  SortByPriceToLowType,
  SortByRateToLowType,
  LoadOffersType,
  RequireAuthorizationType,
  RequireLogoutType,
} from '../types/action';
import {offers, OffersType} from '../mocks/offers';
import {AuthorizationStatus} from '../const';

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

export const loadOffers = (offers: OffersType): LoadOffersType => ({
  type: ActionType.LoadOffers,
  payload: offers,
})

export const RequireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationType => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
})

export const RequireLogout = (): RequireLogoutType => ({
  type: ActionType.RequireLogout,
})
