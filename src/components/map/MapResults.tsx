'use client';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/common/buttons/Button';
import { flex, flexBetween } from '@/components/ui/common/cards/card.recipe';
import WideCard from '@/components/ui/common/cards/WideCard';
import WideCardContent from '@/components/ui/common/cards/WideCardContent';
import { modalText } from '@/components/ui/common/modals/modal.recipe';
import { Likes } from '@/components/ui/common/toggles';
import { locationList } from '@/mocks/mapDetail';

function MapResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const data = locationList;

  return (
    <div className={flex({ p: 'md', gap: 'lg', marginB: 'sm' })}>
      <div className={flexBetween()}>
        <span className={modalText({ text: 'sub2' })}>{query}</span>
        <div>드롭박스</div>
      </div>
      <div>
        {data.map(place => (
          <WideCard image={place.image}>
            <WideCardContent
              title={place.title}
              subtitle={place.type}
              date={false}
              rating={place.rating}
              footerType="location"
              footerText={place.location}
              action={<Likes liked={place.liked} />}
            />
          </WideCard>
        ))}
      </div>
    </div>
  );
}

export default MapResults;
