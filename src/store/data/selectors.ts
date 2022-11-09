import {NameSpace, RootStateType} from '../root-reducer';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';

export const getOffers = (state: RootStateType): OffersType => state[NameSpace.data].offers;
export const getLoadedOffersStatus = (state: RootStateType): boolean => state[NameSpace.data].isOffersLoaded;
export const getOtherPlaces = (state: RootStateType): OffersType => state[NameSpace.data].otherPlaces;
export const getLoadedOtherPlacesStatus = (state: RootStateType): boolean => state[NameSpace.data].isOtherPlacesLoaded;
export const getReviews = (state: RootStateType): ReviewsType => state[NameSpace.data].reviews;
export const getLoadedReviewsStatus = (state: RootStateType): boolean => state[NameSpace.data].isReviewsLoaded;
