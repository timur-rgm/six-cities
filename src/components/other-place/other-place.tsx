import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../types/state';
import {updateFavoritesAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offers';

type OtherPlaceType = {
  offer: OfferType,
  onArticleCLick: () => void;
}

export default function OtherPlace(props: OtherPlaceType): JSX.Element {
  const {offer, onArticleCLick} = props;
  const {id, image, title, type, isFavorite, price, rate} = offer;

  const dispatch: AppDispatch = useDispatch();

  return (
    <article
      className="near-places__card place-card"
    >
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
            onClick={() => dispatch(updateFavoritesAction(id, Number(!isFavorite)))}
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
        <h2
          className="place-card__name"
          onClick={onArticleCLick}
        >
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
