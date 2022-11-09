import {useState} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeSorting} from '../../store/action';
import {SortingType} from '../../const';
import {Actions} from '../../types/action';
import {RootStateType} from '../../store/root-reducer';
import {getOffers} from '../../store/data/selectors';
import {getCurrentCity, getCurrentSortingType} from '../../store/process/selectors';
 
const mapStateToProps = (state: RootStateType) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
  sortingType: getCurrentSortingType(state),
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  changeSorting: changeSorting,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function Sorting(props: PropsFromReduxType): JSX.Element {
  const {sortingType, changeSorting} = props;
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
              changeSorting(name);
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

export default connector(Sorting);
