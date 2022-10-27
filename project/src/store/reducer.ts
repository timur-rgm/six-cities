import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {AuthorizationStatus} from '../const';
import {SortingType} from '../types/offers';

const initialState = {
  city: 'Paris',
  offers: [],
  sortingType: SortingType.Popular,
  isOffersLoaded: false,
  activeOfferId: 0,
  authorizationStatus: AuthorizationStatus.Unknown,
}

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadOffers:
      return {...state, offers: action.payload, isOffersLoaded: true};
    case ActionType.SetActiveOfferId:
      return {...state, activeOfferId: action.payload};
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChangeSorting:
      return {...state, sortingType: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
