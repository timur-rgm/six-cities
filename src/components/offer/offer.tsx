import {Link} from 'react-router-dom';
import {logoutAction} from '../../store/api-actions';
import Map from '../map/map';
import ReviewList from '../review-list/review-list';
import OtherPlacesList from '../other-places-list/other-places-list';
import {useSelector, useDispatch} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getOffers} from '../../store/data/selectors';
import {getActiveOfferId} from '../../store/process/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {AppDispatch} from '../../types/state';

function Offer(): JSX.Element {
  const offers = useSelector(getOffers);
  const activeOfferId = useSelector(getActiveOfferId);
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const user = useSelector(getUserData);

  const dispatch: AppDispatch = useDispatch();

  const {
    title,
    description,
    isPremium,
    type,
    price,
    rate,
    bedrooms,
    maxAdults,
    features,
    owner: {avatar, name, isPro}
  } = offers[activeOfferId - 1];

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth 
                ? <ul className="header__nav-list">
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{user.email}</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <Link
                        className="header__nav-link"
                        onClick={() => dispatch(logoutAction())}
                        to="/"
                      >
                        <span className="header__signout">Sign out</span>
                      </Link>
                    </li>
                  </ul>
                
                : <Link to="/login" className="header__nav-link">
                    <span className="header__signout">Sign in</span>
                  </Link>
              }
            </nav>
          </div>
        </div>
      </header>

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
                <button className="property__bookmark-button button" type="button">
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
              <ReviewList />
            </div>
          </div>
          <section className="property__map map">
            <Map />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OtherPlacesList />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
