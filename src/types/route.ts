import { Marker } from '@/types/marker';

export type Route = {
  routeId: number;
  userId: number;
  name: string;
  description: string;
  likeCount: number;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  markers: RouteMarker[];
  isLiked: boolean;
};

export type RouteMarker = Marker & {
  routeMarkerId: number;
  sequence: number;
};

export type PostRoutePayload = {
  name: string;
  description: string;
  isPublic: boolean;
};

export type RouteMarkers = {
  routeMarkerId: number;
  routeId: number;
  markerId: number;
  sequence: number;
  createdAt: string;
  updatedAt: string;
  route: Route;
  marker: Marker;
};

export type PostRouteMarkerPayload = {
  routeId: number;
  markerId: number;
  sequence: number;
};

export type PutRouteMarkerUpdate = {
  routeId: number;
  markers: [{ routeMarkerId: number; sequence: number }];
};
