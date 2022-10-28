import {MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from "leaflet";
import {Cities} from '../const';

export default function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: string): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: Cities[city].coordinates.lat,
          lng: Cities[city].coordinates.lng,
        },
        zoom: 11
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    };

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }

      if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: Cities[city].coordinates.lat,
          lng: Cities[city].coordinates.lng,
        },
        zoom: 11
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
    }}

  }, [mapRef, map, city])
  

  return map;
}