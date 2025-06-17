import { ENDPOINTS } from '@/api/endpoints';
import { mutationFetcher } from '@/api/fetcher';
import { PostStoryPayload } from '@/types/story';

export const storyOption = {
  postStory: () => ({
    mutationFn: async ({ story, images }: PostStoryPayload) => {
      const storyRes = await mutationFetcher(
        'post',
        ENDPOINTS.STORY.LIST,
        story,
      );

      const storyId = storyRes.id;
      await mutationFetcher('post', ENDPOINTS.STORY_IMAGE.UPLOAD, {
        story_id: storyId,
        image_url: images,
      });

      return storyRes;
    },
  }),
};
