import {AuthorizationStatus, SortingType, AppRoute} from '../const';
import {
  ActionType,
  ChangeCityActionType,
  ChangeSortingType,
  SetActiveOfferIdType,
  LoadOffersType,
  LoadOtherPlacesByIdType,
  LoadReviewsByIdType,
  SendReviewType,
  RequireAuthorizationType,
  RequireLogoutType,
  RedirectToRouteType,
  SetUserDataType,
} from '../types/action';
import {OffersType} from '../types/offers';
import {ReviewsType, SentReviewType} from '../types/reviews';


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

export const loadOtherPlacesById = (offers: OffersType): LoadOtherPlacesByIdType => ({
  type: ActionType.LoadOtherPlacesById,
  payload: offers,
})

export const loadReviewsById = (reviews: ReviewsType): LoadReviewsByIdType => ({
  type: ActionType.LoadReviewsById,
  payload: reviews,
})

export const sendReview = (review: SentReviewType): SendReviewType => ({
  type: ActionType.SendReview,
  payload: review,
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

export const setUserData = (userData: {email: string}): SetUserDataType => ({
  type: ActionType.SetUserData,
  payload: userData,
});

