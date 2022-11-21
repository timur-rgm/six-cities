import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {changeCity} from '../../store/action';
import {getCurrentCity} from '../../store/process/selectors';
import {AppDispatch} from '../../types/state';
import {Cities} from '../../const';

export default function CitiesList(): JSX.Element {
  const currentCity = useSelector(getCurrentCity);
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list" data-testid="cities-list">
      {Object.keys(Cities).map((name, i) => 
        <li
          className="locations__item"
          key={name+i}
          data-testid="cities-item"
        >
          <Link
            to="/"
            onClick={() => dispatch(changeCity(name))}
            className={`locations__item-link tabs__item ${name === currentCity && `tabs__item--active`}`}
          >
            <span>{name}</span>
          </Link>
        </li>
      )}
    </ul>
  );
};
