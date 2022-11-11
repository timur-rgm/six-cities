import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {changeCity} from '../../store/action';
import {CitiesType} from '../../const';
import {getCurrentCity} from '../../store/process/selectors';
import {AppDispatch} from '../../types/state';

type CitiesListType = {
  cities: CitiesType,
}

function CitiesList({cities}: CitiesListType): JSX.Element {
  const currentCity = useSelector(getCurrentCity);

  const dispatch: AppDispatch = useDispatch();

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
            onClick={() => dispatch(changeCity(name))}
          >
            <span>{name}</span>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default CitiesList;
