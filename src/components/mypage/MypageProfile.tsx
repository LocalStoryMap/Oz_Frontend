'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

import { PenIcon } from '@/components/icons';

import {
  avatarBox,
  avatarImage,
  avatarWrapper,
  editButton,
  email,
  hiddenFileInput,
  nickname,
  nicknameInput,
  nicknameWrapper,
  profileInfo,
  profileSection,
} from './mypage.recipe';

export default function MypageProfile() {
  const [profileImage, setProfileImage] = useState(
    '/images/default-userImage.png',
  );
  const [isEditingNickname, setIsEditingNickname] = useState(false);
  const [nicknameValue, setNicknameValue] = useState('콩팥');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const nicknameInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNicknameEdit = () => {
    if (isEditingNickname) {
      // 저장 로직
      setIsEditingNickname(false);
    } else {
      setIsEditingNickname(true);
      // setTimeout으로 다음 렌더링 사이클에서 focus
      setTimeout(() => {
        nicknameInputRef.current?.focus();
      }, 0);
    }
  };

  const handleNicknameBlur = () => {
    setIsEditingNickname(false);
  };

  return (
    <div className={profileSection()}>
      <div className={avatarWrapper()}>
        <button
          type="button"
          className={avatarBox()}
          onClick={handleImageClick}
          aria-label="프로필 사진 변경"
        >
          <Image
            src={profileImage}
            alt="profile"
            width={96}
            height={96}
            className={avatarImage()}
          />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={hiddenFileInput()}
          aria-hidden="true"
        />
      </div>

      <div className={profileInfo()}>
        <div className={nicknameWrapper()}>
          {isEditingNickname ? (
            <input
              ref={nicknameInputRef}
              type="text"
              value={nicknameValue}
              onChange={e => setNicknameValue(e.target.value)}
              onBlur={handleNicknameBlur}
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  handleNicknameEdit();
                }
              }}
              className={nicknameInput()}
            />
          ) : (
            <span className={nickname()}>{nicknameValue}</span>
          )}
          <button
            type="button"
            className={editButton()}
            aria-label="닉네임 편집"
            onClick={handleNicknameEdit}
          >
            <PenIcon size={14} color="#7D848D" />
          </button>
        </div>
        <div className={email()}>likethesweetestlullaby@gmail.com</div>
      </div>
    </div>
  );
}
