'use client';

import { useSearchParams } from 'next/navigation';

import MapResults from '@/components/map/MapResults';
import MapView from '@/components/map/MapView';

function MapSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  return <div>{query ? <MapResults query={query} /> : <MapView />}</div>;
}

export default MapSearch;
