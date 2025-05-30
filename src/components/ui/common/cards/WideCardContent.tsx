'use client';

import { ReactNode } from 'react';

import { CalendarIcon, LocationIcon } from '@/components/icons';
import StarRating from '@/components/ui/common/ratings/StarRating';

import { css } from '@root/styled-system/css';

type WideCardContentProps = {
  title: string;
  subtitle?: string;
  date?: boolean;
  rating?: number | string;
  footerType?: 'feeling' | 'location';
  footerText?: string;
  action?: ReactNode;
};

/**
 * WideCardContent 컴포넌트
 *
 * @component
 * @example
 * <WideCardContent
 *   title="부산 국제시장"
 *   subtitle="2025.06.30"
 *   rating={4.8}
 *   footerType="location"
 *   footerText="부산광역시 중구 어쩌구"
 *   action={<HeartButton />}
 * />
 *
 * @param {string} title - 카드 상단의 제목 텍스트
 * @param {string} [subtitle] - 날짜 혹은 부가 설명 등 카드 중간 설명 텍스트
 * @param {boolean} [date=true] - 캘린더 아이콘을 subtitle 앞에 표시할지 여부
 * @param {number|string} [rating] - 평점 숫자. 별점과 함께 출력됨
 * @param {'feeling' | 'location'} [footerType] - 하단 아이콘 종류
 * @param {string} [footerText] - 하단 설명 텍스트
 * @param {ReactNode} [action] - 우측 상단에 표시할 추가 액션 요소 (예: 좋아요 버튼)
 */

function WideCardContent({
  title,
  subtitle,
  date = true,
  rating,
  footerType,
  footerText,
  action,
}: WideCardContentProps) {
  const ICON_MAP = {
    feeling: '😀',
    location: <LocationIcon fill="#A5A7B5" strokeWidth={0.2} />,
  } as const;

  const icon = footerType ? ICON_MAP[footerType] : null;

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: 1,
        justifyContent: 'space-between',
      })}
    >
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <span
          className={css({
            textStyle: 'label1',
            lineClamp: 1,
            width: 'full',
          })}
        >
          {title}
        </span>
        {action}
      </div>
      <p
        className={css({
          display: 'flex',
          gap: 1,
          alignItems: 'center',
          textStyle: 'body3',
          color: 'gray.600',
        })}
      >
        {date && <CalendarIcon />}
        <span>{subtitle}</span>
      </p>
      {rating && (
        <div
          className={css({
            display: 'flex',
            gap: 1.5,
            alignItems: 'center',
            textStyle: 'body3',
            color: 'gray.600',
          })}
        >
          <StarRating value={Number(rating)} />
          <span>{rating}</span>
        </div>
      )}
      {footerText && (
        <p className={css({ display: 'flex', alignItems: 'center', gap: 1 })}>
          {icon}
          <span
            className={css({
              textStyle: 'body3',
              color: 'gray.400',
            })}
          >
            {footerText}
          </span>
        </p>
      )}
    </div>
  );
}

export default WideCardContent;
