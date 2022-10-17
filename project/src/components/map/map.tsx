import {useEffect, useRef} from "react";
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {changeCity, enterOffers, chooseOffersByCity} from '../../store/action';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import L, { Marker } from "leaflet";

type MapType = {
}

const mapStateToProps = ({offers}: State) => ({
  offers: offers,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({
  // onCityChange: changeCity,
  // enterOffers: enterOffers,
  // chooseOffersByCity: chooseOffersByCity,
}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & MapType;

function Map(props: ConnectedComponentPropsType): JSX.Element {
  const {offers} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef);
  const selectedPoint = true;

  useEffect(() => {
    if (map) {
      const myIcon = L.icon({
        iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
        iconSize: [38, 95],
      });
      
      offers.forEach((offer) => {
        const marker = new Marker([offer.coordinates.lat, offer.coordinates.lng], {
          icon: myIcon,
        });

        marker 
          .addTo(map);
      });
    }
  }, [map, offers]);

  return <div style={{ height: '100%'}} ref={mapRef}></div>
}

export default connector(Map);