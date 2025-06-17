export type PostStoryPayload = {
  story: {
    title: string;
    content: string;
    emoji: string;
  };
  images: string[];
};
