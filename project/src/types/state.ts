import {AuthorizationStatus, SortingType} from '../const';
import {OffersType} from './offers';

export type State = {
  city: string,
  offers: OffersType,
  sortingType: SortingType,
  isOffersLoaded: boolean,
  activeOfferId: number,
  authorizationStatus: AuthorizationStatus,
}
