import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {groupFavoritesByCity, getLoadedFavoritesStatus} from '../../store/data/selectors';
import {getFavoritesAction} from '../../store/api-actions';
import {AppDispatch} from '../../types/state';
import {Link} from 'react-router-dom';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorite from '../favorite/favorite';
import {AppRoute} from '../../const';

function FavoritesList(): JSX.Element {
  const favorites = useSelector(groupFavoritesByCity);
  const isFavoritesLoaded = useSelector(getLoadedFavoritesStatus);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavoritesAction())
  }, [favorites])
  
  if (!favorites.size || !isFavoritesLoaded) {
    return <FavoritesEmpty />
  }

  return (
    <div className="page">
      
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link"
                to={AppRoute.Root}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
