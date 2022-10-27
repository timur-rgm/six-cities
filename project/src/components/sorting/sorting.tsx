import {useState} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeSorting} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {SortingType} from '../../types/offers';
 
const mapStateToProps = ({city, offers, sortingType}: State) => ({
  currentCity: city,
  offers: offers,
  sortingType: sortingType,
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
        className={
          isOpen
          ? 'places__options places__options--custom places__options--opened'
          : 'places__options places__options--custom'
        }
      >

        <li
          onClick={() => {
            changeSorting(SortingType.Popular);
            setIsOpen(!isOpen);
          }}
          className={`places__option ${sortingType === SortingType.Popular && `places__option--active`}`}
          tabIndex={0}
        >
          Popular
        </li>
        
        <li
          onClick={() => {
            changeSorting(SortingType.SortByPriceToHigh);
            setIsOpen(!isOpen);
          }}
          className={`places__option ${sortingType === SortingType.SortByPriceToHigh && `places__option--active`}`}
          tabIndex={0}
        >
          Price: low to high
        </li>
        
        <li
          onClick={() => {
            changeSorting(SortingType.SortByPriceToLow);
            setIsOpen(!isOpen);
          }}
          className={`places__option ${sortingType === SortingType.SortByPriceToLow && `places__option--active`}`}
          tabIndex={0}
        >
          Price: high to low
        </li>

        <li
          onClick={() => {
            changeSorting(SortingType.SortByRateToLow);
            setIsOpen(!isOpen);
          }}
          className={`places__option ${sortingType === SortingType.SortByRateToLow && `places__option--active`}`}
          tabIndex={0}
        >
          Top rated first
        </li>

      </ul>
    </form>
  )
}

export default connector(Sorting);
