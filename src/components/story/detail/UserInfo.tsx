import React from 'react';
import Image from 'next/image';
import StoryContentActions from '@components/story/detail/StoryContentActions';

import { css } from '@root/styled-system/css';

type Props = {
  createdAt: string;
  userNickname: string;
  userProfileImage: string;
};

function UserInfo({ createdAt, userNickname, userProfileImage }: Props) {
  // TODO: 써야하는 데이터
  console.log(userProfileImage);
  return (
    <article>
      <div className={css({ display: 'flex', gap: 4 })}>
        <Image
          src="/images/default-userImage.png"
          alt="userImage"
          width={40}
          height={40}
          onError={e => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/default-userImage.png';
          }}
        />
        <div>
          <p>{new Date(createdAt).toLocaleDateString()}</p>
          <p>{userNickname}</p>
        </div>
        <StoryContentActions />
      </div>
    </article>
  );
}

export default UserInfo;
