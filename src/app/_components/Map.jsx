"use client"
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Custom hook to handle map view update
const MapViewUpdater = ({ position }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13, {
        animate: true,
      });
    }
  }, [position, map]);

  return null;
};


const Map = ({ location }) => {
  useEffect(() => {
    console.log('Location object:', location);
  }, [location]);

  // Default position if location is undefined
  const defaultPosition = [0, 0];

  const position = location ? [location.lat, location.lng] : defaultPosition;

  // Define a custom icon for the marker (optional)
  const customIcon = new L.Icon({
    iconUrl: '/map.png',
    iconSize: [25, 25],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    
  });

  return (
    <div className="w-full h-[75vh] md:h-[85vh] lg:h-[90vh]">
      <MapContainer center={position} zoom={2} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {location && (
          <>
            <Marker position={position} icon={customIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
            <MapViewUpdater position={position} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
