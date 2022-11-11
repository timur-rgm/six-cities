import {createAction} from '@reduxjs/toolkit';
import {AuthorizationStatus, SortingType, AppRoute} from '../const';
import {ActionType} from '../types/action';
import {OffersType} from '../types/offers';
import {ReviewsType, SentReviewType} from '../types/reviews';

export const setActiveOfferId = createAction<number>(ActionType.SetActiveOfferId);

export const changeCity = createAction<string>(ActionType.ChangeCity);

export const changeSorting = createAction<SortingType>(ActionType.ChangeSorting);

export const loadOffers = createAction<OffersType>(ActionType.LoadOffers);

export const loadOtherPlacesById = createAction<OffersType>(ActionType.LoadOtherPlacesById);

export const loadReviewsById = createAction<ReviewsType>(ActionType.LoadReviewsById);

export const sendReview = createAction<SentReviewType>(ActionType.SendReview);

export const loadFavorites = createAction<OffersType>(ActionType.LoadFavorites);

export const requireAuthorization = createAction<AuthorizationStatus>(ActionType.RequireAuthorization);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction<AppRoute>(ActionType.RedirectToRoute);

export const setUserData = createAction(
  ActionType.SetUserData,
  (userData: {email: string}) => ({
    payload: userData,
  })
);
