import {useSelector, useDispatch} from 'react-redux';
import {getOfferById} from '../../store/data/selectors';
import {updateFavoritesAction} from '../../store/api-actions';
import {AppDispatch} from '../../types/state';
import Header from '../header/header';
import Map from '../map/map';
import ReviewList from '../review-list/review-list';
import OtherPlacesList from '../other-places-list/other-places-list';
import {useParams} from 'react-router-dom';

function Offer(): JSX.Element {
  const {offerId} = useParams();
  const offer = useSelector(getOfferById(Number(offerId) - 1));
  const dispatch: AppDispatch = useDispatch();
  
  const {
    id,
    title,
    description,
    isPremium,
    isFavorite,
    type,
    price,
    rate,
    bedrooms,
    maxAdults,
    features,
    owner: {avatar, name, isPro}
  } = offer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                  type="button"
                  onClick={() => dispatch(updateFavoritesAction(id, Number(!isFavorite)))}
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: rate * 20 + '%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rate}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {features.map((feature, i) => {
                    return (
                      <li key={feature+i} className="property__inside-item">
                        {feature}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={isPro ? "property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper" : "property__avatar-wrapper user__avatar-wrapper"}>
                    <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>

                  {isPro &&
                  <span className="property__user-status">
                    Pro
                  </span>}

                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <ReviewList id={Number(offerId) - 1}/>
            </div>
          </div>
          <section className="property__map map">
            <Map />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OtherPlacesList id={Number(offerId) - 1}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
