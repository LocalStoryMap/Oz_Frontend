'use client';

import { useEffect, useState } from 'react';
import { useKakaoLoader } from 'react-kakao-maps-sdk';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';

import { markerOption } from '@/api/options/markerOption';
import { routeOption } from '@/api/options/routeOption';
import MapView from '@/components/map/MapView';
import { CategoryValueType, MAP_CATEGORY } from '@/constants/map';
import { isValidCategory } from '@/util/map';

import { css } from '@root/styled-system/css';

function MapViewContainer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY!,
    libraries: ['clusterer', 'drawing', 'services'],
  });

  const [error, setError] = useState<string | null>(null);
  const [center, setCenter] = useState({ lat: 35.179554, lng: 129.075642 });
  const [routeOpen, setRouteOpen] = useState(false);
  const [polylinePath, setPolylinePath] = useState<
    { lat: number; lng: number }[]
  >([]);

  const position = searchParams.get('position') === 'true';
  const type = searchParams.get('type');
  const routeId = searchParams.get('route');
  const markerId = Number(searchParams.get('id'));

  const selectedCategory: CategoryValueType = isValidCategory(type)
    ? (type as CategoryValueType)
    : MAP_CATEGORY[0].value;

  const { data: marker } = useQuery(
    markerOption.getMarkerList({ layer: selectedCategory }),
  );

  const { data: route } = useQuery({
    ...routeOption.getRouteDetail(Number(routeId)),
    enabled: !!routeId,
  });

  const { data: place } = useQuery({
    ...markerOption.getMarkerDetail(markerId ?? 0),
    enabled: !!markerId,
  });

  const markers = type ? (marker?.data ?? []) : (route?.data.markers ?? []);

  const { mutate: toggleLike } = useMutation(markerOption.postMarkerLike());

  useEffect(() => {
    if (position && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          setCenter({ lat: latitude, lng: longitude });
        },
        error => {
          setError(`위치 정보를 가져올 수 없습니다: ${error.message}`);
        },
        { timeout: 5000 },
      );
    }
  }, [position]);

  useEffect(() => {
    if (!type && routeId && route?.data.markers) {
      const path = route.data.markers.map(marker => ({
        lat: Number(marker.latitude),
        lng: Number(marker.longitude),
      }));
      setPolylinePath(path);
    } else {
      setPolylinePath([]);
    }
  }, [routeId, route, type]);

  const markerClick = (param: string, value: string) => {
    if (param === 'type') {
      setPolylinePath([]);
    }

    const next = new URLSearchParams(searchParams);
    next.set(param, value);
    next.set('position', 'false');
    router.push(`/map/search?${next.toString()}`);
  };

  const cardClick = () => {
    if (place) router.push(`/map/${place?.id}`);
  };

  return (
    <div className={css({ position: 'relative' })}>
      <MapView
        error={error}
        setError={setError}
        center={center}
        setCenter={setCenter}
        routeOpen={routeOpen}
        setRouteOpen={setRouteOpen}
        polylinePath={polylinePath}
        position={position}
        routeId={routeId}
        selectedCategory={selectedCategory}
        markers={markers}
        place={place}
        markerClick={markerClick}
        likeClick={toggleLike}
        cardClick={cardClick}
      />
    </div>
  );
}

export default MapViewContainer;
