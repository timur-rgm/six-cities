import {
  name,
  image,
  address,
  lorem,
  datatype,
  random,
  date,
} from 'faker';
import {OffersType} from '../types/offers';
import {ReviewsType} from '../types/reviews';

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
      isFavorite: datatype.boolean(),
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
