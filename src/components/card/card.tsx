import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state';
import {updateFavoritesAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offers';
import {AppRoute} from '../../const';
import {toUpperCaseFirstLetter} from '../../utils/utils';

type CardType = {
  offer: OfferType,
  setActiveOfferId: (id: number) => void,
}

function Card({offer, setActiveOfferId}: CardType): JSX.Element {
  const {id, image, title, isPremium, isFavorite, type, price, rate} = offer;
  const dispatch: AppDispatch = useDispatch();

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => setActiveOfferId(id)}
      onMouseOut={() => setActiveOfferId(0)}
      data-testid="card-article"
    >
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img
            className="place-card__image"
            src={image}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>

      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
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
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>

        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rate * 20 + '%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>

        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`} data-testid="card-title">
            {title}
          </Link>
        </h2>
        
        <p className="place-card__type">{toUpperCaseFirstLetter(type)}</p>
      </div>
    </article>
  );
};

export default Card;