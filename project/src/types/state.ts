import {OffersType} from '../mocks/offers';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string,
  offers: OffersType,
  activeOfferId: number,
  authorizationStatus: AuthorizationStatus,
}
