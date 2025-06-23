'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@components/ui/common/buttons/Button';
import { useMutation } from '@tanstack/react-query';

import { storyOption } from '@/api/options/storyOption';

import { css } from '@root/styled-system/css';

type Props = {
  mode: 'comment' | 'story';
  isMine: boolean;
};

function StoryContentActions({ mode, isMine }: Props) {
  const router = useRouter();
  const params = useParams() as { storyId: string };
  const id = params?.storyId;

  const deleteMutation = useMutation({
    ...storyOption.deleteStory(id),
    onSuccess: () => {
      router.push('/story');
    },
  });

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        ml: 'auto',
      })}
    >
      <Button size="sm" color="outlineSoft" aria-label="팔로우 버튼">
        Follows
      </Button>
      {mode === 'story' && isMine && (
        <>
          <Button
            size="sm"
            color="custom"
            className={css({
              _hover: {
                bg: 'blue.50',
              },
            })}
            aria-label="글 수정 버튼"
            onClick={() => router.push(`/story/post/${id}`)}
          >
            수정
          </Button>
          <Button
            size="sm"
            color="custom"
            className={css({
              _hover: {
                bg: 'blue.50',
                color: 'red',
              },
            })}
            aria-label="글 삭제 버튼"
            onClick={() => deleteMutation.mutate()}
          >
            삭제
          </Button>
        </>
      )}
    </div>
  );
}

export default StoryContentActions;
