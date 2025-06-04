import React from 'react';
import ActionButtons from '@components/story/detail/comment/ActionButtons';
import CommentContent from '@components/story/detail/comment/CommentContent';
import ReplyInput from '@components/story/detail/comment/ReplyInput';
import UserHeaderInfo from '@components/story/detail/UserHeaderInfo';
import type { CommentItem } from '@components/story/useComment';
import type { UseInputMode } from '@components/story/useInputMode';

import { css } from '@root/styled-system/css';

type Props = {
  comment: CommentItem;
  childNodes: Record<number, CommentItem[]>;
  inputMode: UseInputMode;
  setInputMode: React.Dispatch<React.SetStateAction<UseInputMode>>;
  onSubmit: () => void;
  onCancel: () => void;
  onDelete: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  depth: number;
};

// 대댓글을 보여주는 컴포넌트
export default function CommentCard({
  comment,
  childNodes,
  inputMode,
  setInputMode,
  onSubmit,
  onCancel,
  onDelete,
  onChange,
  depth,
}: Props) {
  const isEditing =
    inputMode.mode === 'edit' && inputMode.payload.commentId === comment.id;
  const isReplying =
    inputMode.mode === 'reply' && inputMode.payload.parent === comment.id;
  const isPendingDelete =
    inputMode.mode === 'edit' &&
    inputMode.payload.commentId === comment.id &&
    !inputMode.payload.value;

  return (
    <div
      style={{ marginLeft: `${depth * 16}px`, borderBottom: '1px solid grey' }}
    >
      <div className={css({ mt: 6 })}>
        <div className={css({ display: 'flex' })}>
          <UserHeaderInfo userName="이관용" createdAt="2025-05-27" />
          <ActionButtons
            isPendingDelete={isPendingDelete}
            onReply={() =>
              setInputMode({
                mode: 'reply',
                payload: { parent: comment.id, value: '' },
              })
            }
            onEdit={() =>
              setInputMode({
                mode: 'edit',
                payload: { commentId: comment.id, value: comment.title },
              })
            }
            onDeleteConfirm={() =>
              setInputMode({
                mode: 'edit',
                payload: { commentId: comment.id },
              })
            }
            onDelete={onDelete}
          />
        </div>
        <CommentContent
          comment={comment}
          isEditing={isEditing}
          value={inputMode.payload.value ?? ''}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </div>

      {isReplying && (
        <ReplyInput
          value={inputMode.payload.value ?? ''}
          onChange={onChange}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      )}

      {depth < 2 &&
        childNodes[comment.id]?.map(child => (
          <CommentCard
            key={child.id}
            comment={child}
            childNodes={childNodes}
            inputMode={inputMode}
            setInputMode={setInputMode}
            onSubmit={onSubmit}
            onCancel={onCancel}
            onDelete={onDelete}
            onChange={onChange}
            depth={depth + 1}
          />
        ))}
    </div>
  );
}
