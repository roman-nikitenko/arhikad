import React from 'react';

export const MapSection: React.FC = () => {
  
  // const loader = new Loader({
  //   apiKey: googleKey,
  //   version: "weekly",
  // });
  //
  // const mapPoint = {
  //   lat: 50.5502473,
  //   lng: 30.2108487,
  // }
  //
  // useEffect(() => {
  //   loader.load().then(async () => {
  //     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  //     new Map(document.getElementById("map") as HTMLElement, {
  //       center: mapPoint,
  //       zoom: 16,
  //     });
  //   })
  // }, [])
  
  return (
    <div id="map" className="w-full flex-2 h-[600px]" />
  );
};
