import {AuthorizationStatus, SortingType} from '../const';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';

const initialState = {
  city: 'Paris',
  offers: [],
  isOffersLoaded: false,
  activeOfferId: 0,
  sortingType: SortingType.Popular,
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
