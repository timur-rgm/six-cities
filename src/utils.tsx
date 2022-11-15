import {SortingType} from './const';
import {OfferType, OffersType, UnadaptedOfferType} from './types/offers';
import {ReviewType, UnadaptedReviewType} from './types/reviews';

export function adaptOfferToClient(offer: UnadaptedOfferType): OfferType {
  const adaptedOffer = {
    id: offer.id,
    image: offer.preview_image,
    title: offer.title,
    description: offer.description,
    images: offer.images,
    isPremium: offer.is_premium,
    type: offer.type,
    price: offer.price,
    isFavorite: offer.is_favorite,
    rate: offer.rating,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults,
    features: offer.goods,
    owner: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isPro: offer.host.is_pro,
    },
    coordinates: {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
    },
    city: offer.city.name,
  }

  return adaptedOffer;
}

export function adaptReviewToClient(review: UnadaptedReviewType): ReviewType {
  const adaptedReview = {
    avatarSrc: review.user.avatar_url,
    userName: review.user.name,
    reviewRate: review.rating,
    reviewDate: review.date,
    reviewText: review.comment,
  }

  return adaptedReview;
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
