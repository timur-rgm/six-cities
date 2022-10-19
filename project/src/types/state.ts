import {OffersType} from '../mocks/offers';

export type State = {
  city: string,
  offers: OffersType,
  activeOfferId: number,
}