'use client';

import { useState } from 'react';

import { CategoryTitle } from '@/components/map/map.recipe';
import { flex } from '@/components/ui/common/cards/card.recipe';
import { MAP_VIEW_TABS } from '@/constants/map';

function MapTabs() {
  const [selectedTab, setSelectedTab] = useState('all');

  return (
    <div className={flex({ direction: 'row', gap: 'lg' })}>
      {MAP_VIEW_TABS.map(({ label, value }) => (
        <button
          key={value}
          type="button"
          className={CategoryTitle({
            textStyle: selectedTab === value ? 'label1' : 'body2',
            active: selectedTab === value,
          })}
          onClick={() => setSelectedTab(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default MapTabs;
