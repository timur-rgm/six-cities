import {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {changeSorting} from '../../store/action';
import {SortingType} from '../../const';
import {getCurrentSortingType} from '../../store/process/selectors';
import {AppDispatch} from '../../types/state';

function Sorting(): JSX.Element {
  const sortingType = useSelector(getCurrentSortingType);

  const dispatch: AppDispatch = useDispatch();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul
        className={`places__options places__options--custom ${isOpen && `places__options--opened`}`}
      >

        {Object.values(SortingType).map((name, i) => 
          <li
            onClick={() => {
              dispatch(changeSorting(name));
              setIsOpen(!isOpen);
            }}
            className={`places__option ${sortingType === name && `places__option--active`}`}
            tabIndex={0}
            key={name+i}
          >
            {name}
          </li>
        )}

      </ul>
    </form>
  )
}

export default Sorting;
