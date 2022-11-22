import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setActiveOfferId} from '../../store/action';
import Card from '../card/card';
import {getOffersByCityAndSorting} from '../../store/data/selectors';
import {AppDispatch} from '../../types/state';

function CardsList(): JSX.Element {
  const offers = useSelector(getOffersByCityAndSorting);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <div className="cities__places-list places__list tabs__content" data-testid="places-list">
      {offers.map((offer) => 
        <Card
          offer={offer}
          onArticleCLick={() => navigate(`/offer/${offer.id}`)}
          setActiveOfferId={(id) => dispatch(setActiveOfferId(id))}
          key={offer.id}
        />
      )}
    </div>
  )
}

export default CardsList;
