import React, { useState } from 'react';
import { CommentItem } from '@components/story/hooks/useComment';

export type UseInputMode = {
  mode: 'unknown' | 'reply' | 'edit';
  payload: {
    parent?: number | null;
    value?: string;
    commentId?: number;
  };
};

type Props = {
  comments: CommentItem[];
  setComments: React.Dispatch<React.SetStateAction<CommentItem[]>>;
};

function useInputMode({ comments, setComments }: Props) {
  const [inputMode, setInputMode] = useState<UseInputMode>({
    mode: 'unknown',
    payload: {},
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMode(prev => ({
      ...prev,
      payload: {
        ...prev.payload,
        value: e.target.value,
      },
    }));
  };

  const onSubmit = () => {
    switch (inputMode.mode) {
      case 'unknown':
        setComments(prev => [
          ...prev,
          {
            id: prev.length + 1,
            title: inputMode.payload.value ?? '',
            parentId: null,
          },
        ]);
        setInputMode({ mode: 'unknown', payload: {} });
        break;
      case 'reply':
        setComments(prev => [
          ...prev,
          {
            id: prev.length + 1,
            title: inputMode.payload.value ?? '',
            parentId: inputMode.payload.parent ?? null,
          },
        ]);
        setInputMode({ mode: 'unknown', payload: {} });
        break;
      case 'edit':
        setComments(prev => [
          ...prev.map(comment =>
            comment.id === inputMode.payload.commentId
              ? {
                  ...comment,
                  title: inputMode.payload.value ?? '',
                }
              : comment,
          ),
        ]);
        setInputMode({ mode: 'unknown', payload: {} });
        break;

      default:
        break;
    }
  };

  const onCancel = () => {
    setInputMode({ mode: 'unknown', payload: {} });
  };

  const onDelete = () => {
    const deleteTargetId = inputMode.payload.commentId;
    const idsToDelete = [deleteTargetId];

    const isRoot =
      comments.find(c => c.id === deleteTargetId)?.parentId === null;

    if (isRoot) {
      const childIds = comments
        .filter(c => c.parentId === deleteTargetId)
        .map(c => c.id);
      idsToDelete.push(...childIds);
    }

    setComments(prev =>
      prev.filter(comment => !idsToDelete.includes(comment.id)),
    );

    setInputMode({ mode: 'unknown', payload: {} });
  };

  return { inputMode, setInputMode, onChange, onSubmit, onDelete, onCancel };
}

export default useInputMode;
