'use client';

import React from 'react';
import { ENDPOINTS } from '@api/endpoints';
import { instance } from '@api/instance';
import StoryDetailCommentSection from '@components/story/detail/sections/StoryDetailCommentSection';
import StoryDetailContent from '@components/story/detail/sections/StoryDetailContent';
import { useQuery } from '@tanstack/react-query';

function Page({ params }: { params: { storyId: string } }) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['storyDetail', params.storyId],
    queryFn: () => instance.get(ENDPOINTS.STORY.DETAIL(params.storyId)),
  });

  if (isLoading) return <div>로딩중...</div>;
  if (isError) return <div>Error...</div>;

  console.log(data?.data);
  return (
    <section>
      <StoryDetailContent story={data?.data} />
      <StoryDetailCommentSection story={data?.data} />
    </section>
  );
}

export default Page;
