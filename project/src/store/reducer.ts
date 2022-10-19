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
    case ActionType.EnterOffers:
      return {...state, offers: offers};
    case ActionType.SetActiveOfferId:
      return {...state, activeOfferId: action.payload};
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.ChooseOffersByCity:
      return {...state, offers: state.offers.filter((offer) => offer.city === state.city)};
    case ActionType.SortByPriceToHigh:
      return {...state, offers: state.offers.slice(0).sort((a, b) => a.price - b.price)};
    case ActionType.SortByPriceToLow:
      return {...state, offers: state.offers.slice(0).sort((a, b) => b.price - a.price)};
    case ActionType.SortByRateToLow:
      return {...state, offers: state.offers.slice(0).sort((a, b) => b.rate - a.rate)};
    default:
      return state;
  }
};

export {reducer};
