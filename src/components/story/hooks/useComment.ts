import { useMemo, useState } from 'react';

import { commentList } from '@/mocks/commentList';

export type CommentItem = {
  id: number;
  title: string;
  parentId: number | null;
};

/**
 * useComment 훅
 * - 댓글 상태를 관리
 * - 루트 댓글과 대댓글(childNodes)로 분리
 * - 대댓글은 parentId를 기준으로 그룹화
 */
function useComment() {
  const [comments, setComments] = useState<CommentItem[]>(commentList);
  const rootComments = comments.filter(item => item.parentId === null);

  const childNodes = useMemo(() => {
    const parent: Record<number, CommentItem[]> = {};
    comments.forEach(item => {
      if (item.parentId !== null) {
        if (parent[item.parentId]) {
          parent[item.parentId].push(item);
        } else {
          parent[item.parentId] = [item];
        }
      }
    });
    return parent;
  }, [comments]);

  return { rootComments, comments, setComments, childNodes };
}

export default useComment;
