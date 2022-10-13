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

type City = {
  name: string,
  coordinates: {
    lat: number,
    lng: number
  }
}

export type CitiesType = City[];


export const Cities = [
  {
    name: `PARIS`,
    coordinates: {
      lat: 48.8534100,
      lng: 2.3488000
    }
  },
  {
    name: `COLOGNE`,
    coordinates: {
      lat: 50.9333300,
      lng: 6.9500000
    }
  },
  {
    name: `BRUSSELS`,
    coordinates: {
      lat: 50.8504500,
      lng: 4.3487800
    }
  },
  {
    name: `AMSTERDAM`,
    coordinates: {
      lat: 52.38333,
      lng: 4.9
    }
  },
  {
    name: `HAMBURG`,
    coordinates: {
      lat: 53.5753200,
      lng: 10.0153400
    }
  },
  {
    name: `DUSSELDORF`,
    coordinates: {
      lat: 51.2217200,
      lng: 6.7761600
    }
  }
]
