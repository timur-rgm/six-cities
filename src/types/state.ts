import {AuthorizationStatus, SortingType} from '../const';
import {OffersType} from './offers';
import {ReviewsType} from './reviews';
import {UserDataType} from './user-data';

export type DataStateType = {
  offers: OffersType,
  isOffersLoaded: boolean,
  otherPlaces: OffersType,
  isOtherPlacesLoaded: boolean,
  reviews: ReviewsType,
  isReviewsLoaded: boolean,
}

export type ProcessStateType = {
  currentCity: string,
  activeOfferId: number,
  currentSortingType: SortingType,
}

export type UserStateType = {
  authorizationStatus: AuthorizationStatus,
  user: UserDataType,
}