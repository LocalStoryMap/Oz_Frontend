'use client';

import { Button } from '@/components/ui/common/buttons/Button';
import { flex } from '@/components/ui/common/cards/card.recipe';
import { modalText } from '@/components/ui/common/modals/modal.recipe';
import { Search, Textarea } from '@/components/ui/common/textfields';

import { css } from '@root/styled-system/css';

function StoryPostForm() {
  return (
    <div className={flex({ gap: 'xl' })}>
      <div className={flex({ gap: 'lg', p: 'sm', marginB: 'sm' })}>
        <p className={modalText({ text: 'body2', align: 'left' })}>글작성</p>
        <Search radius="md" placeholder="위치를 지정해주세요" />
        <Textarea
          size="lg"
          radius="md"
          placeholder="직접 다녀온 생생한 후기를 작성해보세요"
          fullWidth
          className={css({
            minH: {
              base: '150px',
              md: '250px',
            },
            fontWeight: '400',
          })}
        />
        <Button color="outline" size="sm">
          이미지/동영상 첨부
        </Button>
      </div>
      <Button color="black">작성 완료</Button>
    </div>
  );
}

export default StoryPostForm;
