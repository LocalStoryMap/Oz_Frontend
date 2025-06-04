import React from 'react';
import {
  buttonWrapperStyle,
  inputBoxStyle,
  inputWrapperStyle,
} from '@components/story/detail/comment.recipe';
import { CommentItem } from '@components/story/useComment';
import { Button } from '@components/ui/common/buttons/Button';

import { css } from '@root/styled-system/css';

// 댓글 내용을 보여주거나 수정 폼을 렌더링하는 컴포넌트 역할 분리
function CommentContent({
  comment,
  isEditing,
  value,
  onChange,
  onSubmit,
  onCancel,
}: {
  comment: CommentItem;
  isEditing: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  onCancel: () => void;
}) {
  if (!isEditing)
    return (
      <p className={css({ textAlign: 'start', mb: 4 })}>{comment.title}</p>
    );
  return (
    <div>
      <div className={inputWrapperStyle()}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={inputBoxStyle()}
        />
        <div className={buttonWrapperStyle()}>
          <Button size="sm" color="outlineSoft" onClick={onSubmit}>
            저장
          </Button>
          <Button size="sm" color="outlineSoft" onClick={onCancel}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommentContent;
