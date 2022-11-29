import {createSelector} from '@reduxjs/toolkit';
import {NameSpace, RootStateType} from '../root-reducer';
import {getCurrentCity, getCurrentSortingType} from '../process/selectors';
import {OffersType, OfferType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';
import {sortOffers} from '../../utils/utils';

export const getOffers = (state: RootStateType): OffersType => state[NameSpace.data].offers;
export const getOfferById = (id: number) => (state: RootStateType): OfferType => state[NameSpace.data].offers[id];
export const getLoadedOffersStatus = (state: RootStateType): boolean => state[NameSpace.data].isOffersLoaded;
export const getOtherPlaces = (state: RootStateType): OffersType => state[NameSpace.data].otherPlaces;
export const getLoadedOtherPlacesStatus = (state: RootStateType): boolean => state[NameSpace.data].isOtherPlacesLoaded;
export const getReviews = (state: RootStateType): ReviewsType => state[NameSpace.data].reviews;
export const getLoadedReviewsStatus = (state: RootStateType): boolean => state[NameSpace.data].isReviewsLoaded;
export const getFavorites = (state: RootStateType): OffersType => state[NameSpace.data].favorites;
export const getLoadedFavoritesStatus = (state: RootStateType): boolean => state[NameSpace.data].isFavoritesLoaded;

export const getOffersByCity = createSelector(
  [getOffers, getCurrentCity],
  (allOffers, currentCity) => allOffers.filter((offer) => offer.city === currentCity)
);

export const getOffersByCityAndSorting = createSelector(
  [getOffersByCity, getCurrentSortingType],
  (offers, currentSortingType) => sortOffers(offers, currentSortingType)
);

export const groupFavoritesByCity = createSelector(
  [getFavorites],
  (favorites) => {
    const favoritesMap = new Map();
    
    favorites.forEach((favorite) => {
      const city = favorite.city;
      favoritesMap.set(city, favoritesMap.get(city) || []);
      favoritesMap.get(city).push(favorite);
    });

    return favoritesMap;
  }
)
