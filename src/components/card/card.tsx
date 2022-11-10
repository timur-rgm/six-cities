import {ActionCreatorWithPayload} from '@reduxjs/toolkit';
import {Link} from 'react-router-dom';
import {OfferType} from '../../types/offers';

type CardType = {
  offer: OfferType,
  onArticleCLick: () => void,
  setActiveOfferId: ActionCreatorWithPayload<number, string>,
}

export default function Card(props: CardType): JSX.Element {
  const {offer, onArticleCLick, setActiveOfferId} = props;
  const {id, image, title, isPremium, type, price, rate} = offer;

  return (
    <article
      onClick={onArticleCLick}
      onMouseEnter={() => setActiveOfferId(id)}
      // onMouseOut={() => setActiveOfferId(0)}
      className="cities__place-card place-card"
    >
      {
        isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <button className="place-card__bookmark-button button" type="button">
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
          <Link to="#">{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
