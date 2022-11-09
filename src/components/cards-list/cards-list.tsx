import {useNavigate} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {setActiveOfferId} from '../../store/action';
import Card from '../card/card';
import {sortOffers} from '../../utils';
import {Actions} from '../../types/action';
import {RootStateType} from '../../store/root-reducer';
import {getOffers} from '../../store/data/selectors';
import {getCurrentCity, getActiveOfferId, getCurrentSortingType} from '../../store/process/selectors';

const mapStateToProps = (state: RootStateType) => ({
  offers: getOffers(state),
  currentCity: getCurrentCity(state),
  activeOfferId: getActiveOfferId(state),
  sortingType: getCurrentSortingType(state),
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  setActiveOfferId: setActiveOfferId,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type CardsListType = {}
type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CardsListType;

function CardsList(props: ConnectedComponentPropsType): JSX.Element {
  const {currentCity, offers, sortingType, setActiveOfferId} = props;

  let navigate = useNavigate();
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, sortingType).filter((offer) => offer.city === currentCity).map((offer) => 
        <Card
          offer={offer}
          key={offer.id}
          onArticleCLick={() => navigate(`/offer/${offer.id}`)}
          setActiveOfferId={setActiveOfferId}
        />
      )}
    </div>
  )
}

export default connector(CardsList);
