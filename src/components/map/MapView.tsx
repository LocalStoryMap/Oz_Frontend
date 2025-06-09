'use client';

import { useState } from 'react';
import {
  Map,
  MapMarker,
  MapMarkerProps,
  useKakaoLoader,
  useMap,
} from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';

import { mapMarkers } from '@/mocks/mapDetail';

type EventMarkerContainerProps = {
  position: MapMarkerProps['position'];
  content: string;
};

function EventMarkerContainer({
  position,
  content,
}: EventMarkerContainerProps) {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MapMarker
      position={position}
      clickable
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      onClick={marker => map.panTo(marker.getPosition())}
    >
      {isVisible && <div>{content}</div>}
    </MapMarker>
  );
}

function MapView() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY!,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const center = { lat: 35.115045, lng: 129.041519 };

  const router = useRouter();

  const data = mapMarkers;

  return (
    <Map center={center} style={{ width: '100%', height: '360px' }} level={5}>
      {data?.map(marker => (
        <EventMarkerContainer
          key={marker.id}
          position={marker.latlng}
          content={marker.place}
        />
      ))}
    </Map>
  );
}

export default MapView;
