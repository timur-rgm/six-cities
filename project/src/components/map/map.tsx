import {useEffect, useRef, useState, MutableRefObject} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Cities} from '../../const';
import {sortOffers} from '../../utils';
import {State} from '../../types/state';
import L, { Icon, Map } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const mapStateToProps = ({city, offers, sortingType, activeOfferId}: State) => ({
  currentCity: city,
  offers: offers,
  sortingType: sortingType,
  activeOfferId: activeOfferId,
})

const connector = connect(mapStateToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function CityMap(props: PropsFromReduxType): JSX.Element {
  const {currentCity, offers, sortingType, activeOfferId} = props;

  const map: MutableRefObject<Map | null > = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    renderMap();
  
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [map, currentCity]);

  useEffect(() => {
    addMarkers();
  }, [currentCity, offers, activeOfferId]);

  function renderMap() {
    if (mapRef.current) {
      map.current = L.map(mapRef.current, {
        center: {
          lat: Cities[currentCity].coordinates.lat,
          lng: Cities[currentCity].coordinates.lng
        },
        zoom: 12,
        zoomControl: false,
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

      

      offers.filter((offer) => offer.city === currentCity).forEach((offer) => {
        const offerMarker = L.marker([offer.coordinates.lat, offer.coordinates.lng]);
        // console.log(offer.coordinates.lng);
        offerMarker.setIcon(offer.id === activeOfferId ? iconActive : iconDefault).addTo(markersGroup);
      })
    }
  }

  return <div style={{height: '100%'}} ref={mapRef}></div>
}

export default connector(CityMap);
