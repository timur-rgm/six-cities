import {AuthorizationStatus, SortingType} from '../const';
import {OffersType} from './offers';
import {ReviewsType} from './reviews';

export type State = {
  city: string,
  offers: OffersType,
  sortingType: SortingType,
  isOffersLoaded: boolean,
  activeOfferId: number,
  otherPlaces: OffersType,
  isOtherPlacesLoaded: boolean,
  reviews: ReviewsType,
  isReviewsLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: {
    email?: string,
  }
}

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
  user: {
    email?: string,
  }
}
