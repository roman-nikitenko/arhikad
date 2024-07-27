import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export const MapSection: React.FC = () => {
  const position = { lat: 50.550938, lng: 30.214849 };
  
  return (
    <div className="w-full h-[600px]">
      <APIProvider apiKey="AIzaSyBo0Ss_0JCnJx1NwKjHYPHm5mZmxFf1zso">
        <Map defaultCenter={position} defaultZoom={16}>
          <Marker position={position}></Marker>
        </Map>
      </APIProvider>
    </div>
  );
};
