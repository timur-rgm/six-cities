import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import OtherPlace from '../other-place/other-place';
import {OffersType} from '../../types/offers';

type OtherPlacesType = {
  offers: OffersType,
}

export default function OtherPlacesList(props: OtherPlacesType) {
  const {offers} = props;
  const [offerId, setOfferId] = useState(1);

  let navigate = useNavigate();
  
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => 
        <OtherPlace
          offer={offer}
          key={offer.id}
          onArticleCLick={() => {
            navigate(`/offer/${offer.id}`);
          }}
        />
      )}
    </div>
  )
}
