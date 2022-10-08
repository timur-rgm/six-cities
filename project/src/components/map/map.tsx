import { useRef } from "react";
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';


export default function Map(): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  return <div style={{ height: '100%'}} ref={mapRef}></div>
}