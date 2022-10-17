import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity, enterOffers, chooseOffersByCity} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {Link} from 'react-router-dom';
import {CitiesType} from '../../const';

type CitiesListType = {
  cities: CitiesType,
}

const mapStateToProps = ({city, offers}: State) => ({
  currentCity: city,
  offers: offers,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  onCityChange: changeCity,
  enterOffers: enterOffers,
  chooseOffersByCity: chooseOffersByCity,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CitiesListType;

function CitiesList(props: ConnectedComponentPropsType): JSX.Element {
  const {cities, currentCity, offers, onCityChange, enterOffers, chooseOffersByCity} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map(({name}, i) => 
        <li
          className="locations__item"
          key={name+i}
        >
          <Link
            className={name === currentCity ? "locations__item-link tabs__item tabs__item--active" : "locations__item-link tabs__item"} href="#"
            onClick={() => {  
              enterOffers();  
              onCityChange(name);
              chooseOffersByCity(offers);
            }}
            to="/"
          >
            <span>{name}</span>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default connector(CitiesList);
