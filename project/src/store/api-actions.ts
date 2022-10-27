import {ThunkActionResultType} from '../types/action';
import {loadOffers} from '../store/action';
import {OfferType} from '../mocks/offers';
import {adaptToClient} from '../utils';

export function fetchOffersAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>('/hotels');
    console.log(data);
    dispatch(loadOffers(data.map(adaptToClient)));
  }
}
