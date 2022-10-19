import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {offers} from '../mocks/offers';

const initialState = {
  city: 'Paris',
  offers: offers.filter((offer) => offer.city === 'Paris'),
  activeOfferId: 0,
}

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.EnterOffers:
      return {...state, offers: offers};
    case ActionType.ChooseOffersByCity:
      return {...state, offers: state.offers.filter((offer) => offer.city === state.city)};
    case ActionType.GetActiveOfferId:
      return {...state, activeOfferId: action.payload};
    default:
      return state;
  }
};

export {reducer};
