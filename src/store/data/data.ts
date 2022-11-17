import {createReducer} from '@reduxjs/toolkit';
import {
  loadOffers,
  loadOtherPlacesById,
  loadReviewsById,
  loadFavorites,
  updateFavorites,
} from '../../store/action';
import {DataStateType} from '../../types/state';

const initialState: DataStateType = {
  offers: [],
  isOffersLoaded: false,
  otherPlaces: [],
  isOtherPlacesLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  favorites: [],
  isFavoritesLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoaded = true;
    })
    .addCase(loadOtherPlacesById, (state, action) => {
      state.otherPlaces = action.payload;
      state.isOtherPlacesLoaded = true;
    })
    .addCase(loadReviewsById, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(loadFavorites, (state, action) => {
      state.favorites = action.payload;
      state.isFavoritesLoaded = true;
    })
    .addCase(updateFavorites, (state, action) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer);
    })
  }
);

export {data};
