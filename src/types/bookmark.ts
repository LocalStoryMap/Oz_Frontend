export interface StoryDetail {
  id: number;
  title: string;
  address?: string;
  rating?: number;
  images?: Array<{
    id: number;
    image: string;
  }>;
  marker?: {
    id: number;
    place_name: string;
    address: string;
    latitude: number;
    longitude: number;
    rating?: number;
  };
}

export interface Bookmark {
  id: number;
  story: number;
  created_at: string;
}

export interface BookmarkWithStory extends Bookmark {
  storyDetail?: StoryDetail;
}

export interface BookmarkListResponse {
  results?: Bookmark[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}
