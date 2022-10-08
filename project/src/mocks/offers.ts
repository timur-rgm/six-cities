export type OfferType = {
  id: number,
  image: string,
  title: string,
  description: string,
  isPremium: boolean,
  type: string,
  price: number,
  isFavourite: boolean,
  rate: number,
  bedrooms: number,
  maxAdults: number,
  features: string[],
  owner: {
    avatar: string,
    name: string,
    isPro: boolean,
  },
  coordinates: {
    lat: number,
    lng: number,
  }
}

export type OffersType = OfferType[];

export const offers: OffersType = [
  {
    id: 1,
    image: 'https://picsum.photos/260/200',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    type: 'room',
    price: 50,
    isFavourite: false,
    rate: 3,
    bedrooms: 1,
    maxAdults: 5,
    features: ['Kitchen', 'Washing machine', 'Dishwasher', 'Fridge'],
    owner: {
      avatar: 'https://picsum.photos/74/74',
      name: 'John',
      isPro: false,
    },
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.85309666406198,
    }
  },
  {
    id: 2,
    image: 'https://picsum.photos/260/200',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: false,
    type: 'hotel',
    price: 75,
    isFavourite: false,
    rate: 3.5,
    bedrooms: 2,
    maxAdults: 4,
    features: ['Wifi', 'Kitchen'],
    owner: {
      avatar: 'https://picsum.photos/260/200',
      name: 'Tom',
      isPro: false,
    },
    coordinates: {
      lat: 52.369553943508,
      lng: 4.85309666406198,
    },
  },
  {
    id: 3,
    image: 'https://picsum.photos/260/200',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    type: 'apartment',
    price: 75,
    isFavourite: false,
    rate: 4,
    bedrooms: 2,
    maxAdults: 4,
    features: ['Wifi', 'Kitchen'],
    owner: {
      avatar: 'https://picsum.photos/260/200',
      name: 'Joe',
      isPro: false,
    },
    coordinates: {
      lat: 52.3909553943508,
      lng: 4.929309666406198
    },
  },
  {
    id: 4,
    image: 'https://picsum.photos/260/200',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    isPremium: true,
    type: 'apartment',
    price: 100,
    isFavourite: true,
    rate: 5,
    bedrooms: 3,
    maxAdults: 3,
    features: ['Wifi', 'Heating', 'Kitchen'],
    owner: {
      avatar: 'https://picsum.photos/260/200',
      name: 'Joe',
      isPro: true,
    },
    coordinates: {
      lat: 52.3809553943508,
      lng: 4.939309666406198
    },
  },
]
