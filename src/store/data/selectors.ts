import {createSelector} from '@reduxjs/toolkit';
import {NameSpace, RootStateType} from '../root-reducer';
import {getCurrentCity, getCurrentSortingType} from '../process/selectors';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import {sortOffers} from '../../utils';

export const getOffers = (state: RootStateType): OffersType => state[NameSpace.data].offers;
export const getLoadedOffersStatus = (state: RootStateType): boolean => state[NameSpace.data].isOffersLoaded;
export const getOtherPlaces = (state: RootStateType): OffersType => state[NameSpace.data].otherPlaces;
export const getLoadedOtherPlacesStatus = (state: RootStateType): boolean => state[NameSpace.data].isOtherPlacesLoaded;
export const getReviews = (state: RootStateType): ReviewsType => state[NameSpace.data].reviews;
export const getLoadedReviewsStatus = (state: RootStateType): boolean => state[NameSpace.data].isReviewsLoaded;

export const getOffersByCity = createSelector(
  [getOffers, getCurrentCity],
  (allOffers, currentCity) => allOffers.filter((offer) => offer.city === currentCity)
);

export const getOffersByCityAndSorting = createSelector(
  [getOffersByCity, getCurrentSortingType],
  (offers, currentSortingType) => sortOffers(offers, currentSortingType)
);
