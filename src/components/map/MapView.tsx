'use client';

import { Map, MapMarker, useKakaoLoader } from 'react-kakao-maps-sdk';
import { useRouter } from 'next/navigation';

function MapView() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY!,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const center = { lat: 35.115045, lng: 129.041519 };

  const router = useRouter();

  return (
    <Map center={center} style={{ width: '100%', height: '360px' }} level={5}>
      <MapMarker
        position={center}
        clickable
        onClick={() => router.push(`/map/1`)}
      >
        {/* <div>마커 상세</div> */}
      </MapMarker>
    </Map>
  );
}

export default MapView;
