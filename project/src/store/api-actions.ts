import {loadOffers} from '../store/action';
import {adaptToClient} from '../utils';
import {ThunkActionResultType} from '../types/action';
import {OfferType} from '../types/offers';

export function fetchOffersAction(): ThunkActionResultType {
  return async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferType[]>('/hotels');
    console.log(data);
    dispatch(loadOffers(data.map(adaptToClient)));
  }
}
