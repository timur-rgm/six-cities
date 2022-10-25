import {useState} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {enterOffers, chooseOffersByCity, sortByPriceToHigh, sortByPriceToLow, sortByRateToLow} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';

const mapStateToProps = ({city, offers}: State) => ({
  currentCity: city,
  offers: offers,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  chooseOffersByCity: chooseOffersByCity,
  enterOffers: enterOffers,
  sortByPriceToHigh: sortByPriceToHigh,
  sortByPriceToLow: sortByPriceToLow,
  sortByRateToLow: sortByRateToLow,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function Sorting(props: PropsFromReduxType): JSX.Element {
  const {offers, enterOffers, chooseOffersByCity, sortByPriceToLow, sortByPriceToHigh, sortByRateToLow} = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={() => setIsOpen(!isOpen)}
        className="places__sorting-type"
        tabIndex={0}
      >
        Popular
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
            enterOffers();
            chooseOffersByCity(offers);
          }}
          className="places__option places__option--active"
          tabIndex={0}
        >
          Popular
        </li>
        
        <li
          onClick={() => sortByPriceToHigh()}
          className="places__option"
          tabIndex={0}
        >
          Price: low to high
        </li>
        
        <li
          onClick={() => sortByPriceToLow()}
          className="places__option"
          tabIndex={0}
        >
          Price: high to low
        </li>

        <li
          onClick={() => sortByRateToLow()}
          className="places__option"
          tabIndex={0}
        >
          Top rated first
        </li>

      </ul>
    </form>
  )
}

export default connector(Sorting);
