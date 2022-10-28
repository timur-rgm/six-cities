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
  },
  city: string,
}

export type OffersType = OfferType[];
