import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getOffers, groupFavoritesByCity, getLoadedFavoritesStatus} from '../../store/data/selectors';
import {getFavoritesAction} from '../../store/api-actions';
import {AppDispatch} from '../../types/state';
import {Link} from 'react-router-dom';
import Header from '../header/header';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorite from '../favorite/favorite';
import {AppRoute} from '../../const';

function FavoritesList(): JSX.Element {
  const offers = useSelector(getOffers);
  const favorites = useSelector(groupFavoritesByCity);
  const isFavoritesLoaded = useSelector(getLoadedFavoritesStatus);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesAction());
  }, [offers])
  
  if (!favorites.size || !isFavoritesLoaded) {
    return <FavoritesEmpty />
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">

              {Array.from(favorites.keys()).map((city) => 
                <li
                  className="favorites__locations-items"
                  key={city}
                >
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link
                        className="locations__item-link"
                        to={AppRoute.Root}
                        data-testid={`favorites-list-link`}
                      >
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>
                  <Favorite favoritesByCity={favorites.get(city)} />
                </li>
              )}

            </ul>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesList;
