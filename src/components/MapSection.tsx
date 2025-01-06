import React from "react";
// import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

export const MapSection: React.FC = () => {
  // const position = { lat: 50.550938, lng: 30.214849 };

  return (
    <div className="w-full h-[600px]">
      {/* <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAP}>
        <Map defaultCenter={position} defaultZoom={16}>
          <Marker position={position}></Marker>
        </Map>
      </APIProvider> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d295.7968674800443!2d30.214408895110836!3d50.550871192947426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1735059258520!5m2!1sru!2sua"
        width="100%"
        height="600"
        loading="lazy"
      ></iframe>
    </div>
  );
};
