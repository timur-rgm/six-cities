import {ActionType, Actions} from '../../types/action';
import {DataStateType} from '../../types/state';

const initialState: DataStateType = {
  offers: [],
  isOffersLoaded: false,
  otherPlaces: [],
  isOtherPlacesLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
}

const data = (state: DataStateType = initialState, action: Actions): DataStateType => {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isOffersLoaded: true};
    case ActionType.LoadOtherPlacesById:
      return {...state, otherPlaces: action.payload, isOtherPlacesLoaded: true};
    case ActionType.LoadReviewsById:
      return {...state, reviews: action.payload, isReviewsLoaded: true};
    default:
      return state;
  }
}

export {data};
