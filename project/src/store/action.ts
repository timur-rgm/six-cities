import {AuthorizationStatus, SortingType, AppRoute} from '../const';
import {
  ActionType,
  ChangeCityActionType,
  ChangeSortingType,
  SetActiveOfferIdType,
  LoadOffersType,
  RequireAuthorizationType,
  RequireLogoutType,
  RedirectToRouteType,
} from '../types/action';
import {OffersType} from '../types/offers';


export const setActiveOfferId = (id: number): SetActiveOfferIdType => ({
  type: ActionType.SetActiveOfferId,
  payload: id,
})

export const changeCity = (city: string): ChangeCityActionType => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const changeSorting = (sortingType: SortingType): ChangeSortingType => ({
  type: ActionType.ChangeSorting,
  payload: sortingType,
});

export const loadOffers = (offers: OffersType): LoadOffersType => ({
  type: ActionType.LoadOffers,
  payload: offers,
})

export const requireAuthorization = (authStatus: AuthorizationStatus): RequireAuthorizationType => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
})

export const requireLogout = (): RequireLogoutType => ({
  type: ActionType.RequireLogout,
})

export const redirectToRoute = (url: AppRoute): RedirectToRouteType => ({
  type: ActionType.RedirectToRoute,
  payload: url,
});
