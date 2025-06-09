'use client';

import { useState } from 'react';
import { MapMarker, MapMarkerProps, useMap } from 'react-kakao-maps-sdk';

type MarkerContainerProps = {
  position: MapMarkerProps['position'];
  content?: string;
  onClick?: () => void;
};

function MarkerContainer({ position, content, onClick }: MarkerContainerProps) {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MapMarker
      position={position}
      clickable
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      onClick={marker => {
        map.panTo(marker.getPosition());
        onClick?.();
      }}
    >
      {isVisible && <div>{content}</div>}
    </MapMarker>
  );
}

export default MarkerContainer;
