import { ENDPOINTS } from '@/api/endpoints';
import { mutationFetcher } from '@/api/fetcher';

export const storyOption = {
  postStory: () => ({
    mutationFn: (data: any) =>
      mutationFetcher('post', ENDPOINTS.STORY.LIST, data),
  }),
  postImages: () => ({
    mutationFn: (data: any) =>
      mutationFetcher('post', ENDPOINTS.STORY_IMAGE.UPLOAD, data),
  }),
};
