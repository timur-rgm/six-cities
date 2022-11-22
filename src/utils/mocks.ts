import {
  name,
  image,
  address,
  lorem,
  datatype,
  random,
  date,
} from 'faker';
import {OffersType, OfferType, UnadaptedOffersType, UnadaptedOfferType} from '../types/offers';
import {ReviewType, ReviewsType, UnadaptedReviewsType, UnadaptedReviewType} from '../types/reviews';

export const makeFakeOffer = (): OfferType => {
  return {
    id: datatype.number(100),
    image: image.city(),
    title: lorem.paragraph(),
    description: lorem.paragraph(),
    images: [image.city(), image.city(), image.city()],
    isPremium: datatype.boolean(),
    type: random.word(),
    price: datatype.number(300),
    isFavorite: true,
    rate: datatype.number(5),
    bedrooms: datatype.number(5),
    maxAdults: datatype.number(5),
    features: [random.word(), random.word(), random.word()],
    owner: {
      avatar: image.avatar(),
      name: name.findName(),
      isPro: datatype.boolean(),
    },
    coordinates: {
      lat: datatype.number({max: 50, precision: 0.00001}),
      lng: datatype.number({max: 50, precision: 0.00001}),
    },
    city: address.city(),
  }
};

export const makeFakeUnadaptedOffer = (): UnadaptedOfferType => {
  return {
    bedrooms: datatype.number(5),
    city: {
      name: address.city(),
      location: {
        latitude: datatype.number({max: 50, precision: 0.00001}),
        longitude: datatype.number({max: 50, precision: 0.00001}),
        zoom: 12,
      }
    },
    description: lorem.paragraph(),
    goods: [random.word(), random.word(), random.word()],
    host: {
      avatar_url: image.avatar(),
      id: datatype.number(100),
      is_pro: datatype.boolean(),
      name: name.findName(),
    },
    id: datatype.number(100),
    images: [image.city(), image.city(), image.city()],
    is_favorite: true,
    is_premium: datatype.boolean(),
    location: {
      latitude: datatype.number({max: 50, precision: 0.00001}),
      longitude: datatype.number({max: 50, precision: 0.00001}),
      zoom: 12,
    },
    max_adults: datatype.number(5),
    preview_image: image.city(),
    price: datatype.number(300),
    rating: datatype.number(5),
    title: lorem.paragraph(),
    type: random.word(),
  }
};

export const makeFakeOffers = (): OffersType => {
  return [
    {
      id: datatype.number(100),
      image: image.city(),
      title: lorem.paragraph(),
      description: lorem.paragraph(),
      images: [image.city(), image.city(), image.city()],
      isPremium: datatype.boolean(),
      type: random.word(),
      price: datatype.number(300),
      isFavorite: true,
      rate: datatype.number(5),
      bedrooms: datatype.number(5),
      maxAdults: datatype.number(5),
      features: [random.word(), random.word(), random.word()],
      owner: {
        avatar: image.avatar(),
        name: name.findName(),
        isPro: datatype.boolean(),
      },
      coordinates: {
        lat: datatype.number({max: 50, precision: 0.00001}),
        lng: datatype.number({max: 50, precision: 0.00001}),
      },
      city: address.city(),
    },
  ]
};

export const makeFakeUnadaptedOffers = (): UnadaptedOffersType => {
  return [
    {
      bedrooms: datatype.number(5),
      city: {
        name: address.city(),
        location: {
          latitude: datatype.number({max: 50, precision: 0.00001}),
          longitude: datatype.number({max: 50, precision: 0.00001}),
          zoom: 12,
        }
      },
      description: lorem.paragraph(),
      goods: [random.word(), random.word(), random.word()],
      host: {
        avatar_url: image.avatar(),
        id: datatype.number(100),
        is_pro: datatype.boolean(),
        name: name.findName(),
      },
      id: datatype.number(100),
      images: [image.city(), image.city(), image.city()],
      is_favorite: true,
      is_premium: datatype.boolean(),
      location: {
        latitude: datatype.number({max: 50, precision: 0.00001}),
        longitude: datatype.number({max: 50, precision: 0.00001}),
        zoom: 12,
      },
      max_adults: datatype.number(5),
      preview_image: image.city(),
      price: datatype.number(300),
      rating: datatype.number(5),
      title: lorem.paragraph(),
      type: random.word(),
    },
  ]
};

export const makeFakeUnadaptedReview = (): UnadaptedReviewType => {
  return {
    comment: lorem.paragraph(),
    date: date.future.toString(),
    id: datatype.number(100),
    rating: datatype.number(5),
    user: {
      avatar_url: image.avatar(),
      id: datatype.number(100),
      is_pro: datatype.boolean(),
      name: name.firstName(),
    }
  }
};

export const makeFakeReview = (): ReviewType => {
  return {
    avatarSrc: image.avatar(),
    userName: name.firstName(),
    reviewRate: datatype.number(5),
    reviewDate: date.future.toString(),
    reviewText: lorem.paragraph(),
  }
};

export const makeFakeReviews = (): ReviewsType => {
  return [
    {
      avatarSrc: image.avatar(),
      userName: name.firstName(),
      reviewRate: datatype.number(5),
      reviewDate: date.future.toString(),
      reviewText: lorem.paragraph(),
    },
  ]
};

export const makeFakeUnadaptedReviews = (): UnadaptedReviewsType => {
  return [
    {
      comment: lorem.paragraph(),
      date: date.future.toString(),
      id: datatype.number(100),
      rating: datatype.number(5),
      user: {
        avatar_url: image.avatar(),
        id: datatype.number(100),
        is_pro: datatype.boolean(),
        name: name.firstName(),
      }
    },
  ]
};

