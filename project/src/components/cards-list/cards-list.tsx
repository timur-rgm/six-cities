import {useState, MouseEvent} from 'react';
import Card from '../card/card';
import {useHistory} from 'react-router-dom';
import {OffersType} from '../../mocks/offers';

type CardsListType = {
  offers: OffersType,
}

export default function CardsList(props: CardsListType) {
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
