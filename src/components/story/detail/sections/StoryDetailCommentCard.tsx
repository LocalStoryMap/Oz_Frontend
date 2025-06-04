import React from 'react';
import { commentListWrapperStyle } from '@components/story/detail/comment.recipe';
import CommentCard from '@components/story/detail/comment/CommentCard';
import { CommentItem } from '@components/story/hooks/useComment';
import { UseInputMode } from '@components/story/hooks/useInputMode';

import { css } from '@root/styled-system/css';

type Props = {
  rootComments: CommentItem[];
  childNodes: Record<number, CommentItem[]>;
  inputMode: UseInputMode;
  setInputMode: React.Dispatch<React.SetStateAction<UseInputMode>>;
  onSubmit: () => void;
  onCancel: () => void;
  onDelete: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// 루트 댓글들을 렌더링하고, 없을 경우 메세지를 출력하는 컴포넌트
function StoryDetailCommentCard({
  rootComments,
  childNodes,
  inputMode,
  setInputMode,
  onSubmit,
  onCancel,
  onDelete,
  onChange,
}: Props) {
  return (
    <div className={commentListWrapperStyle()}>
      {rootComments.length > 0 ? (
        rootComments.map(comment => (
          <CommentCard
            key={comment.id}
            comment={comment}
            childNodes={childNodes}
            inputMode={inputMode}
            setInputMode={setInputMode}
            onSubmit={onSubmit}
            onCancel={onCancel}
            onDelete={onDelete}
            onChange={onChange}
            depth={1}
          />
        ))
      ) : (
        <p className={css({ textAlign: 'center', color: 'gray.100', mb: 24 })}>
          아직 댓글이 없어요. <br />
          가장 먼저 댓글을 달아보세요.
        </p>
      )}
    </div>
  );
}

export default StoryDetailCommentCard;
