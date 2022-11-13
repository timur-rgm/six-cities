import {Action} from '@reduxjs/toolkit';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {RootStateType} from '../store/root-reducer';

export enum ActionType {
  SetActiveOfferId = 'setActiveOfferId',
  ChangeCity = 'changeCity',
  ChangeSorting = 'changeSorting',
  LoadOffers = 'loadOffers',
  LoadOtherPlacesById = 'loadOtherPlacesById',
  LoadReviewsById = 'loadReviewsById',
  SendReview = 'sendReview',
  LoadFavorites = 'loadFavorites',
  UpdateFavorites = 'updateFavorites',
  RequireAuthorization = 'requireAuthorization',
  RequireLogout = 'requireLogout',
  RedirectToRoute = 'redirectToRoute',
  SetUserData = 'setUserData',
}

export type ThunkActionResultType<R = Promise<void>> = ThunkAction<R, RootStateType, AxiosInstance, Action>;

export type ThunkAppDispatchType = ThunkDispatch<RootStateType, AxiosInstance, Action>;
