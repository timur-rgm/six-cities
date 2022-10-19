import {useHistory} from 'react-router-dom';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {setActiveOfferId} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import Card from '../card/card';

const mapStateToProps = ({offers, activeOfferId}: State) => ({
  offers: offers,
  activeOfferId: activeOfferId,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  setActiveOfferId: setActiveOfferId,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type CardsListType = {}
type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CardsListType;

function CardsList(props: ConnectedComponentPropsType): JSX.Element {
  const {offers, setActiveOfferId} = props;

  let history = useHistory();
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => 
        <Card
          offer={offer}
          key={offer.id}
          onArticleCLick={() => history.push(`/offer/${offer.id}`)}
          setActiveOfferId={setActiveOfferId}
        />
      )}
    </div>
  )
}

export default connector(CardsList);
