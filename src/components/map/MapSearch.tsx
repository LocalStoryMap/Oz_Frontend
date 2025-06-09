'use client';

import { useSearchParams } from 'next/navigation';

import MapResults from '@/components/map/MapResults';
import MapView from '@/components/map/MapView';
import { CategoryValueType } from '@/constants/map';

function MapSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query');
  const type = searchParams.get('type');

  if (query) {
    return <MapResults query={query} />;
  }

  return <MapView initialType={type as CategoryValueType} />;
}

export default MapSearch;
