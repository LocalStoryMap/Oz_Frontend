'use client';

import { ReactNode } from 'react';
import Image from 'next/image';

import { LocationIcon } from '@/components/icons';

import defaultThumbnail from '@images/default-thumbnail.png';

import { css } from '@root/styled-system/css';

type SquareCardProps = {
  image: string;
  liked?: boolean;
  title?: string;
  location?: string;
  custom?: boolean;
  children?: ReactNode;
};

/**
 * SquareCard 컴포넌트
 *
 * - 좋아요(❤️/🤍)는 추후 공통 좋아요 버튼 컴포넌트로 교체 예정
 *
 *  ✅ 이 컴포넌트는 단일 카드이므로, **카드 목록을 구성할 경우 부모에서 grid 또는 flex 레이아웃을 설정해야 합니다.**
 * 예: `display: grid`, `gridTemplateColumns`, `gap` 등
 *
 * @component
 * @example
 * <SquareCard image="/images/img.jpg" title="국제시장" location="부산 중구" />
 *
 * @example
 * <SquareCard image="/images/img.jpg" custom>
 *   <div>내가 원하는 콘텐츠</div>
 * </SquareCard>
 *
 * @param {string} image - 카드 상단에 표시할 이미지 경로
 * @param {boolean} [liked=false] - 좋아요 여부 (❤️ or 🤍)
 * @param {string} [title] - 기본 제목 (custom이 false일 경우 사용)
 * @param {string} [location] - 기본 위치 설명 (custom이 false일 경우 사용)
 * @param {boolean} [custom=false] - true일 경우 children 기반 사용자 정의 콘텐츠 사용
 * @param {ReactNode} [children] - custom이 true일 경우 렌더링할 사용자 정의 콘텐츠
 */

function SquareCard({
  image,
  liked = false,
  title,
  location,
  custom = false,
  children,
}: SquareCardProps) {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 3,
        borderRadius: 'lg',
        boxShadow: 'md',
      })}
    >
      <div
        className={css({
          position: 'relative',
          borderRadius: 'lg',
          width: 'full',
          aspectRatio: 1,
          overflow: 'hidden',
        })}
      >
        <Image
          src={image || defaultThumbnail}
          alt={title || '카드이미지'}
          fill
          className={css({ objectFit: 'cover' })}
        />
        <span
          className={css({
            position: 'absolute',
            top: 2,
            right: 2,
          })}
        >
          {liked ? '❤️' : '🤍'}
        </span>
      </div>
      {custom ? (
        children
      ) : (
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          })}
        >
          <p
            className={css({
              textStyle: 'label1',
              lineClamp: 1,
              width: 'full',
            })}
          >
            {title}
          </p>
          <p
            className={css({
              textStyle: 'body3',
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            })}
          >
            <LocationIcon />
            <span
              className={css({
                color: 'gray.600',
                lineClamp: 1,
                width: 'full',
              })}
            >
              {location}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default SquareCard;
