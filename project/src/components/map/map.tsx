import {useEffect, useRef, MutableRefObject} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
import {Cities} from '../../const';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import L, { Icon, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapStateToProps = ({city, offers}: State) => ({
  currentCity: city,
  offers: offers,
})

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => bindActionCreators({}, dispatch)

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;
type ConnectedComponentPropsType = PropsFromReduxType & MapType;

type MapType = {}

function CityMap(props: ConnectedComponentPropsType): JSX.Element {
  const {currentCity, offers} = props;

  let map: MutableRefObject<Map | null > = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    renderMap();
  
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [map, offers]);

  useEffect(() => {
    addMarkers();
  }, [currentCity, offers]);

  function renderMap() {
    if (mapRef.current) {
      map.current = L.map(mapRef.current, {
        center: {
          lat: Cities[currentCity].coordinates.lat,
          lng: Cities[currentCity].coordinates.lng
        },
        zoom: 10,
      });
  
      L
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map.current);
    }
  }

  function addMarkers() {
    if (map.current) {
      const markersGroup = L.layerGroup().addTo(map.current);
      
      const iconDefault = new Icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
      });

      const iconActive = new Icon({
        iconUrl: 'img/pin-active.svg',
        iconSize: [40, 40],
      });

      offers.forEach((offer) => {
        const offerMarker = L.marker([offer.coordinates.lat, offer.coordinates.lng]);
        offerMarker.setIcon(iconDefault).addTo(markersGroup);
      })
    }
  }

  return <div style={{height: '100%'}} ref={mapRef}></div>
}

export default connector(CityMap);
