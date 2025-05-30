import { StarIcon } from '@/components/icons';

import { css } from '@root/styled-system/css';

type StarRatingProps = {
  value: string;
  max?: number;
};

function StarRating({ value, max = 5 }: StarRatingProps) {
  return (
    <div className={css({ display: 'flex', gap: 1 })}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(Number(value));
        return (
          <span key={i}>
            <StarIcon
              fill={filled ? '#FFD336' : '#DEDEDE'}
              width={16}
              height={16}
            />
          </span>
        );
      })}
    </div>
  );
}

export default StarRating;
