import {useState} from 'react';
import Card from '../card/card';
import {OffersType} from '../../mocks/offers';

type CardsListType = {
  offers: OffersType,
}

export default function CardsList(props: CardsListType) {
  const {offers} = props;
  
  const [offerId, setOfferId] = useState(1);
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => 
        <Card
          offer={offer}
          key={offer.id}
        />
      )}
    </div>
  )
}
