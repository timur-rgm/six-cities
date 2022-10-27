import {OffersType} from '../mocks/offers';
import {AuthorizationStatus} from '../const';
import {SortingType} from './offers';

export type State = {
  city: string,
  offers: OffersType,
  sortingType: SortingType,
  isOffersLoaded: boolean,
  activeOfferId: number,
  authorizationStatus: AuthorizationStatus,
}
