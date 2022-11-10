import {Link} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity, loadOffers} from '../../store/action';
import {RootStateType} from '../../store/root-reducer';
import {CitiesType} from '../../const';
import {getOffers} from '../../store/data/selectors';
import {getCurrentCity} from '../../store/process/selectors';

const mapStateToProps = (state: RootStateType) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onCityChange: changeCity,
  loadOffers: loadOffers,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CitiesListType;

type CitiesListType = {
  cities: CitiesType,
}

function CitiesList(props: ConnectedComponentPropsType): JSX.Element {
  const {cities, currentCity, onCityChange} = props;

  return (
    <ul className="locations__list tabs__list">
      {Object.keys(cities).map((name, i) => 
        <li
          className="locations__item"
          key={name+i}
        >
          <Link
            to="/"
            className={name === currentCity ? "locations__item-link tabs__item tabs__item--active" : "locations__item-link tabs__item"}
            onClick={() => onCityChange(name)}
          >
            <span>{name}</span>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default connector(CitiesList);
