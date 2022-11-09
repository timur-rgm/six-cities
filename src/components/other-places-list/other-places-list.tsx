import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {getOtherPlacesByIdAction} from "../../store/api-actions";
import OtherPlace from '../other-place/other-place';
import LoadingScreen from '../loading-screen/loading-screen';
import {ThunkAppDispatchType} from '../../types/action';
import {RootStateType} from "../../store/root-reducer";
import {OfferType} from '../../types/offers';
import {getOtherPlaces, getLoadedOtherPlacesStatus} from '../../store/data/selectors';
import {getActiveOfferId} from '../../store/process/selectors';

const mapStateToProps = (state: RootStateType) => ({
  otherPlaces: getOtherPlaces(state),
  isOtherPlacesLoaded: getLoadedOtherPlacesStatus(state),
  activeOfferId: getActiveOfferId(state),
})

const mapDispatchToProps = (dispatch: ThunkAppDispatchType) => ({
  onloadOtherPlaces(activeOfferId: number) {
    dispatch(getOtherPlacesByIdAction(activeOfferId));
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function OtherPlacesList(props: PropsFromReduxType) {
  const {otherPlaces, isOtherPlacesLoaded, activeOfferId, onloadOtherPlaces} = props;

  const navigate = useNavigate();

  useEffect(() => {
    onloadOtherPlaces(activeOfferId);
  }, [])
  
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

export default connector(OtherPlacesList);
