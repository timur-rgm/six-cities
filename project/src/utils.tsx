import {SortingType} from './const';
import {OfferType, OffersType} from './types/offers';

export function adaptToClient(offer: any): OfferType {
  const adaptedOffer = {
    ...offer,
    image: offer.preview_image,
    isPremium: offer.is_premium,
    isFavourite: offer.is_favorite,
    rate: offer.rating,
    maxAdults: offer.max_adults,
    features: offer.goods,
    owner: {
      id: offer.host.id,
      avatar: offer.host.avatar_url,
      name: offer.host.is_pro,
      isPro: offer.host.name,
    },
    coordinates: {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
      zoom: offer.location.zoom,
    },
    city: offer.city.name,
  }

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.rating;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.goods;
  delete adaptedOffer.host;
  delete adaptedOffer.location;

  return adaptedOffer;
}

export function sortOffers(offers: OffersType, sortingType: SortingType) {
  switch (sortingType) {
    case SortingType.SortByPriceToHigh:
      return offers.slice(0).sort((a, b) => a.price - b.price);
    case SortingType.SortByPriceToLow:
      return offers.slice(0).sort((a, b) => b.price - a.price);
    case SortingType.SortByRateToLow:
      return offers.slice(0).sort((a, b) => b.rate - a.rate);
    default:
      return offers;
  }
}
