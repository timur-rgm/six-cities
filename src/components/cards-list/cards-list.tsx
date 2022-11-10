import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setActiveOfferId} from '../../store/action';
import Card from '../card/card';
import {sortOffers} from '../../utils';
import {getOffers} from '../../store/data/selectors';
import {getCurrentCity, getCurrentSortingType} from '../../store/process/selectors';
import {AppDispatch} from '../../types/state';

function CardsList(): JSX.Element {
  const offers = useSelector(getOffers);
  const currentCity = useSelector(getCurrentCity);
  const sortingType = useSelector(getCurrentSortingType);

  const dispatch: AppDispatch = useDispatch();

  const onActiveOfferId = (id: number) => {
    dispatch(setActiveOfferId(id));
  }

  const navigate = useNavigate();
  
  return (
    <div className="cities__places-list places__list tabs__content">
      {sortOffers(offers, sortingType).filter((offer) => offer.city === currentCity).map((offer) => 
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
