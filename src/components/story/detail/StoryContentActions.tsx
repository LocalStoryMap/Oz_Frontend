'use client';

import React from 'react';
import { followsOption } from '@api/options/followsOption';
import { Button } from '@components/ui/common/buttons/Button';
import { useMutation } from '@tanstack/react-query';

import { css } from '@root/styled-system/css';

type Props = {
  mode: 'comment' | 'story';
  isMine: boolean;
  userNickname?: string;
};

function StoryContentActions({ mode, isMine, userNickname }: Props) {
  const mutation = useMutation({
    ...followsOption.postFollows(),
  });

  const onSubmit = () => {
    mutation.mutate({ nickname: userNickname });
  };

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        ml: 'auto',
      })}
    >
      <Button
        size="sm"
        color="outlineSoft"
        aria-label="팔로우 버튼"
        onClick={onSubmit}
      >
        {mutation.isPending ? 'asd' : 'Follows'}
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
          >
            삭제
          </Button>
        </>
      )}
    </div>
  );
}

export default StoryContentActions;
