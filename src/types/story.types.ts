export type StoryCardProps = {
  story: {
    storyId: string;
    images?: string[];
    userProfile?: string;
    title?: string;
    content?: string;
    likeCount?: number;
    viewCount?: number;
    isLiked?: boolean;
    userNickname?: string;
    createdAt?: string;
  };
};

type Story = StoryCardProps['story'];

type StoryPage = {
  results: Story[];
};

export type StoryQueryData = {
  pages: StoryPage[];
  pageParams: unknown[];
};
