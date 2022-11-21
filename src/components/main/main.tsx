import {useSelector} from 'react-redux';
import {getOffersByCity} from '../../store/data/selectors';
import {getCurrentCity} from '../../store/process/selectors';
import CitiesList from '../cities-list/cities-list';
import Sorting from '../sorting/sorting';
import CardsList from '../cards-list/cards-list';
import Map from '../map/map';
import Header from '../header/header';

export default function Main(): JSX.Element {
  const offers = useSelector(getOffersByCity);
  const currentCity = useSelector(getCurrentCity);
  
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesList />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {currentCity}</b>
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
