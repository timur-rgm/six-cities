import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCity} from '../../store/action';
import {logoutAction} from '../../store/api-actions';
import CitiesList from '../cities-list/cities-list';
import Sorting from '../sorting/sorting';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import {Cities, AuthorizationStatus} from '../../const';
import {ThunkAppDispatchType} from '../../types/action';
import {RootStateType} from '../../store/root-reducer';
import {getOffers} from '../../store/data/selectors';
import {getCurrentCity} from '../../store/process/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';

const mapStateToProps = (state: RootStateType) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  user: getUserData(state),
});

const mapDispatchToProps = (dispatch: ThunkAppDispatchType) => bindActionCreators({
  onCityChange: changeCity,
  logout() {
    dispatch(logoutAction())
  }
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function Main(props: PropsFromReduxType): JSX.Element {
  const {currentCity, offers, logout, authorizationStatus, user} = props;
  
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
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
                        onClick={logout}
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList
                cities={Cities}
              />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.filter((offer) => offer.city === currentCity).length} places to stay in {currentCity}</b>
              <Sorting />
              <CardsList />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default connector(Main);
