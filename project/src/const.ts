export enum AppRoute {
  Root = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortingType {
  Popular = 'Popular',
  SortByPriceToHigh = 'Price: low to high',
  SortByPriceToLow = 'Price: high to low',
  SortByRateToLow = 'Top rated first',
};

type CityType = {
  name: string,
  coordinates: {
    lat: number,
    lng: number
  }
}

export type CitiesType = {
  [index: string]: CityType,
};
  

export const Cities: CitiesType = {
  Paris: {
    name: `Paris`,
    coordinates: {
      lat: 48.8534100,
      lng: 2.3488000
    }
  },

  Cologne: {
    name: `Cologne`,
    coordinates: {
      lat: 50.9333300,
      lng: 6.9500000
    }
  },

  Brussels: {
    name: `Brussels`,
    coordinates: {
      lat: 50.8504500,
      lng: 4.3487800
    }
  },

  Amsterdam: {
    name: `Amsterdam`,
    coordinates: {
      lat: 52.38333,
      lng: 4.9
    }
  },

  Hamburg: {
    name: `Hamburg`,
    coordinates: {
      lat: 53.5753200,
      lng: 10.0153400
    }
  },
  
  Dusseldorf: {
    name: `Dusseldorf`,
    coordinates: {
      lat: 51.2217200,
      lng: 6.7761600
    }
  }
}
