export type OfferType = {
  id: number,
  image: string,
  title: string,
  description: string,
  isPremium: boolean,
  type: string,
  price: number,
  isFavorite: boolean,
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

export type UnadaptedOfferType = {
  bedrooms: number,
  city: {
    name: string,
    location: {
      latitude: number,
      longitude: number,
      zoom: number,
    }
  }
  description: string,
  goods: string[],
  host: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string,
  }
  id: number,
  images: string[],
  is_favorite: boolean,
  is_premium: boolean,
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  }
  max_adults: number,
  preview_image: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}
