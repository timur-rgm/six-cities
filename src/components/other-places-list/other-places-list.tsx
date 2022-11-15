import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {getOtherPlacesByIdAction} from "../../store/api-actions";
import OtherPlace from '../other-place/other-place';
import LoadingScreen from '../loading-screen/loading-screen';
import {OfferType} from '../../types/offers';
import {getOffers, getOtherPlaces, getLoadedOtherPlacesStatus} from '../../store/data/selectors';
import {getActiveOfferId} from '../../store/process/selectors';
import { AppDispatch } from '../../types/state';

type OtherPlacesListType = {
  id: number,
};

function OtherPlacesList({id}: OtherPlacesListType) {
  const offers = useSelector(getOffers);
  const otherPlaces = useSelector(getOtherPlaces);
  const isOtherPlacesLoaded = useSelector(getLoadedOtherPlacesStatus);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOtherPlacesByIdAction(id))
  }, [offers])
  
  return (
    <div className="near-places__list places__list">
      {isOtherPlacesLoaded
        ? otherPlaces.map((offer: OfferType) => 
            <OtherPlace
            offer={offer}
            key={offer.id}
            onArticleCLick={() => {
              navigate(`/offer/${offer.id}`);
            }}
          />)
        : <LoadingScreen />
      }
    </div>
  )
}

export default OtherPlacesList;
