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

import { flex } from '@/components/ui/common/cards/card.recipe';
import WideCard from '@/components/ui/common/cards/WideCard';
import WideCardContent from '@/components/ui/common/cards/WideCardContent';
import { Likes } from '@/components/ui/common/toggles';
import { mapDetail, mapMarkers } from '@/mocks/mapDetail';

import { css, cx } from '@root/styled-system/css';

type EventMarkerContainerProps = {
  position: MapMarkerProps['position'];
  content?: string;
  onClick?: () => void;
};

function EventMarkerContainer({
  position,
  content,
  onClick,
}: EventMarkerContainerProps) {
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

function MapView() {
  const router = useRouter();

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY!,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const center = { lat: 35.115045, lng: 129.041519 };

  const data = mapMarkers;
  const place = mapDetail;
  const [selectedMarker, setSelectedMarker] = useState<
    null | (typeof mapMarkers)[number]
  >(null);

  return (
    <div className={(cx(flex({ gap: 'md' })), css({ position: 'relative' }))}>
      <Map center={center} style={{ width: '100%', height: '600px' }} level={5}>
        {data?.map(marker => (
          <EventMarkerContainer
            key={marker.id}
            position={marker.latlng}
            content={marker.place}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
      </Map>
      {selectedMarker && (
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '2.5%',
            zIndex: 10,
            width: '95%',
          }}
        >
          <WideCard image={place.image}>
            <WideCardContent
              title={place.title}
              subtitle={place.type}
              date={false}
              rating={place.rating}
              footerType="location"
              footerText={place.location}
              action={<Likes liked={place.liked} />}
              onClick={() => router.push(`/map/${place.id}`)}
            />
          </WideCard>
        </div>
      )}
    </div>
  );
}

export default MapView;
