import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setActiveOfferId} from '../../store/action';
import Card from '../card/card';
import {getOffersByCityAndSorting} from '../../store/data/selectors';
import {AppDispatch} from '../../types/state';

function CardsList(): JSX.Element {
  const offers = useSelector(getOffersByCityAndSorting);

  const dispatch: AppDispatch = useDispatch();

  const onActiveOfferId = (id: number) => {
    dispatch(setActiveOfferId(id));
  }

  const navigate = useNavigate();
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => 
        <Card
          offer={offer}
          key={offer.id}
          onArticleCLick={() => navigate(`/offer/${offer.id}`)}
          setActiveOfferId={onActiveOfferId}
        />
      )}
    </div>
  )
}

export default CardsList;
