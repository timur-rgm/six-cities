import { useEffect, useRef } from "react";
import useMap from '../../hooks/useMap';
import {OffersType} from '../../mocks/offers';
import 'leaflet/dist/leaflet.css';
import L, { Marker } from "leaflet";

type MapType = {
  offers: OffersType,
}

export default function Map(props: MapType): JSX.Element {
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