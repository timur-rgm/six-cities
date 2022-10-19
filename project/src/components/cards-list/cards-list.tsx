import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity, enterOffers, chooseOffersByCity} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {useState, MouseEvent} from 'react';
import {useHistory} from 'react-router-dom';
import Card from '../card/card';
import {OffersType} from '../../mocks/offers';

type CardsListType = {
}

const mapStateToProps = ({city, offers}: State) => ({
  offers: offers,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & CardsListType;

function CardsList(props: ConnectedComponentPropsType): JSX.Element {
  const {offers} = props;
  const [offerId, setOfferId] = useState(1);

  let history = useHistory();
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => 
        <Card
          offer={offer}
          key={offer.id}
          onArticleCLick={() => {
            history.push(`/offer/${offer.id}`);
          }}
        />
      )}
    </div>
  )
}

export default connector(CardsList);
