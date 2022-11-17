import {data} from './data';
import {
  loadOffers,
  loadOtherPlacesById,
  loadReviewsById,
  loadFavorites,
  updateFavorites,
} from '../action';
import {makeFakeOffers, makeFakeReviews} from '../../utils/mocks';
import {DataStateType} from '../../types/state';
import {OffersType} from '../../types/offers';
import {ReviewsType} from '../../types/reviews';

const state: DataStateType = {
  offers: [],
  isOffersLoaded: false,
  otherPlaces: [],
  isOtherPlacesLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  favorites: [],
  isFavoritesLoaded: false,
}

const offers: OffersType = makeFakeOffers();
const reviews: ReviewsType = makeFakeReviews();

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should update offers by load offers', () => {
    expect(data(state, loadOffers(offers)))
      .toEqual({...state, offers, isOffersLoaded: true});
  });
  
  it('should update otherPlaces by load otherPlaces', () => {
    expect(data(state, loadOtherPlacesById(offers)))
      .toEqual({...state, otherPlaces: offers, isOtherPlacesLoaded: true});
  });

  it('should update reviews by load reviews', () => {
    expect(data(state, loadReviewsById(reviews)))
      .toEqual({...state, reviews, isReviewsLoaded: true});
  });
  
  it('should update favorites by load favorites', () => {
    expect(data(state, loadFavorites(offers)))
      .toEqual({...state, favorites: offers, isFavoritesLoaded: true});
  });
  
  it('should update offers by update favorite', () => {
    expect(data({...state, offers}, updateFavorites({...offers[0], isFavorite: false})))
      .toEqual({...state, offers});
  });
});