import {CitiesType} from '../../const';

type CitiesListType = {
  cities: CitiesType,
}

export default function CitiesList(props: CitiesListType): JSX.Element {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map(({name}, i) => 
        <li
          className="locations__item"
          key={name+i}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{name}</span>
          </a>
        </li>
      )}
    </ul>
  )
}
