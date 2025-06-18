import { queryOptions } from '@tanstack/react-query';

import { ENDPOINTS } from '@/api/endpoints';
import { mutationFetcher, queryFetcher } from '@/api/fetcher';
import { Marker } from '@/types/marker';

export const markerOption = {
  getMarkerList: (params?: Record<string, any>) =>
    queryOptions<Marker[]>({
      queryKey: ['marker', 'list', params],
      queryFn: queryFetcher(ENDPOINTS.MARKER.LIST, params),
    }),
  postMarker: () => ({
    mutationFn: (data: any) =>
      mutationFetcher('post', ENDPOINTS.MARKER.LIST, data),
  }),
};
