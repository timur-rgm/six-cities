import {useDispatch} from 'react-redux';
import {updateFavoritesAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {AppDispatch} from '../../types/state';
import {OffersType} from '../../types/offers';
import {AppRoute} from '../../const';

type FavoriteType = {
  favoritesByCity: OffersType;
}

function Favorite({favoritesByCity}: FavoriteType): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="favorites__places">
      {favoritesByCity.map(({id, image, price, isFavorite, rate, title, type}) => 
        <article className="favorites__card place-card" key={id}>
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src={image} width="150" height="110" alt="Place image" />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                onClick={() => dispatch(updateFavoritesAction(id, Number(!isFavorite)))}
                className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
                type="button"
              >
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: rate * 20 + '%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link
                to={`${AppRoute.Offer}/${id}`}
              >
                {title}
              </Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      )}
    </div>
  )
};

export default Favorite;