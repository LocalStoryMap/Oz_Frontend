import { ReactNode } from 'react';

import { BookIcon, HomeMarkerIcon } from '@/components/icons';

import { css } from '@root/styled-system/css';

type BenefitCardProps = {
  icon?: 'book' | 'map';
  title: string;
  content?: ReactNode;
};

/**
 * BenefitCard 컴포넌트
 *
 * @component
 * @example
 * <BenefitCard
 *   icon="book"
 *   title="스토리"
 *   content={
 *     <>
 *       <span>무제한</span>&nbsp;
 *       <span className={css({ color: 'primary' })}>스토리 열람</span>
 *     </>
 *   }
 * />
 *
 * @param {'book' | 'map'} icon - 카드 상단에 표시될 아이콘 종류
 * @param {string} title - 카드의 제목 텍스트
 * @param {ReactNode} content - 카드의 본문 콘텐츠. 텍스트 일부를 강조하거나 아이콘 등을 포함할 수 있음
 */

function BenefitCard({ icon, title, content }: BenefitCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'book':
        return <BookIcon />;
      case 'map':
        return <HomeMarkerIcon />;
      default:
        return null;
    }
  };
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        p: 4,
        borderRadius: 'sm',
        boxShadow: 'md',
        alignItems: 'center',
      })}
    >
      {renderIcon()}
      <p className={css({ textStyle: 'label1' })}>{title}</p>
      <p className={css({ textStyle: 'label1', color: 'gray.600' })}>
        {content}
      </p>
    </div>
  );
}

export default BenefitCard;
