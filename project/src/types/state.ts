import {AuthorizationStatus, SortingType} from '../const';
import {OffersType} from './offers';
import {ReviewsType} from './reviews';

export type State = {
  city: string,
  offers: OffersType,
  sortingType: SortingType,
  isOffersLoaded: boolean,
  activeOfferId: number,
  reviews: ReviewsType,
  isReviewsLoaded: boolean,
  authorizationStatus: AuthorizationStatus,
  user: {
    email?: string,
  }
}
