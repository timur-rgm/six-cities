import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Amsterdam',
  offers: offers,
}

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.WriteOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
