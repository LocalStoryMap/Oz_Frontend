'use client';

import { useState } from 'react';
import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';

import WideCard from '@/components/ui/common/cards/WideCard';
import WideCardContent from '@/components/ui/common/cards/WideCardContent';
import { Likes } from '@/components/ui/common/toggles';
import MarkerContainer from '@/components/ui/maps/MarkerContainer';
import { mapDetail, mapMarkers } from '@/mocks/mapDetail';

import { css } from '@root/styled-system/css';

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
    <div className={css({ position: 'relative' })}>
      <Map center={center} style={{ width: '100%', height: '600px' }} level={5}>
        {data?.map(marker => (
          <MarkerContainer
            key={marker.id}
            position={marker.latlng}
            content={marker.place}
            onClick={() => setSelectedMarker(marker)}
          />
        ))}
      </Map>
      {selectedMarker && (
        <div
          className={css({
            position: 'absolute',
            bottom: '2',
            left: '2.5%',
            zIndex: 10,
            w: '95%',
          })}
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
