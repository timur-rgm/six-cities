import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getOfferById} from '../../store/data/selectors';
import {setActiveOfferId} from '../../store/action';
import {updateFavoritesAction} from '../../store/api-actions';
import {AppDispatch} from '../../types/state';
import Header from '../header/header';
import Map from '../map/map';
import ReviewList from '../review-list/review-list';
import OtherPlacesList from '../other-places-list/other-places-list';
import {toUpperCaseFirstLetter} from '../../utils/utils';

function Offer(): JSX.Element {
  const {offerId} = useParams();
  const offer = useSelector(getOfferById(Number(offerId) - 1));
  const dispatch: AppDispatch = useDispatch();
  
  dispatch(setActiveOfferId(Number(offerId)));
  
  const {
    id,
    title,
    description,
    images,
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

          <div className="property__gallery-container container" id="gallery-container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => 
                <div
                  className="property__image-wrapper"
                  key={image}  
                >
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              )}
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
                  onClick={() => dispatch(updateFavoritesAction(id, Number(!isFavorite)))}
                  className={`property__bookmark-button button ${isFavorite && `property__bookmark-button--active`}`}
                  type="button"
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
                  {toUpperCaseFirstLetter(type)}
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
                  {features.map((feature, i) =>
                    <li
                      className="property__inside-item"
                      key={feature+i}
                    >
                      {feature}
                    </li>
                  )}
                </ul>
              </div>

              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`property__avatar-wrapper user__avatar-wrapper ${isPro && `property__avatar-wrapper--pro`}`}
                  >
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
