'use client';

import React from 'react';
import CommentInputBox from '@components/story/detail/comment/CommentInputBox';
import PostReactionButtons from '@components/story/detail/post/PostReactionButtons';
import StoryDetailCommentCard from '@components/story/detail/sections/StoryDetailCommentCard';
import UserHeaderInfo from '@components/story/detail/UserHeaderInfo';
import useComment from '@components/story/useComment';
import useInputMode from '@components/story/useInputMode';
import { Button } from '@components/ui/common/buttons/Button';

import { css } from '@root/styled-system/css';

/**
 * 댓글 전체 기능을 담당하는 컴포넌트로,
 * 유저 정보, 공감 버튼, 댓글 리스트 및 입력창을 포함하며
 * 댓글 상태 및 입력 모드를 useComment와 useInputMode 훅을 통해 관리한다.
 */
function StoryDetailCommentSection() {
  const { rootComments, comments, setComments, childNodes } = useComment();
  const { inputMode, setInputMode, onSubmit, onChange, onCancel, onDelete } =
    useInputMode({
      comments,
      setComments,
    });

  return (
    <article>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <UserHeaderInfo userName="이관용" createdAt="2025-05-27" />
        <div className={css({ marginLeft: 'auto' })}>
          <div
            className={css({
              display: 'flex',
              marginLeft: 'auto',
              gap: 4,
            })}
          >
            <Button size="sm" color="outline">
              수정
            </Button>
            <Button size="sm" color="outline">
              삭제
            </Button>
          </div>
        </div>
      </div>
      <PostReactionButtons />
      <StoryDetailCommentCard
        rootComments={rootComments}
        inputMode={inputMode}
        setInputMode={setInputMode}
        childNodes={childNodes}
        onSubmit={onSubmit}
        onCancel={onCancel}
        onDelete={onDelete}
        onChange={onChange}
      />
      <CommentInputBox
        value={inputMode.payload.value ?? ''}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </article>
  );
}

export default StoryDetailCommentSection;
