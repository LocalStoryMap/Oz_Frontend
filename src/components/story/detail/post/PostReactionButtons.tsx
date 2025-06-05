import React from 'react';
import { CommentsIcon, HeartIcon } from '@components/icons';
import { Button } from '@components/ui/common/buttons/Button';

import { css } from '@root/styled-system/css';

// 게시글 하트 댓글 수를 보여줌 추후 서버 연결 시 뮤테이션 처리 관심사 분리
function PostReactionButtons() {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        mb: 12,
        borderBottom: '1px solid grey',
        width: '100%',
      })}
    >
      <Button size="sm" color="outline">
        <HeartIcon />0
      </Button>
      <Button size="sm" color="outline">
        <CommentsIcon fill="none" />0
      </Button>
    </div>
  );
}

export default PostReactionButtons;
