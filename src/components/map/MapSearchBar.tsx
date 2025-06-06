'use client';

import { GpsLocationIcon } from '@/components/icons';
import { iconWrapper } from '@/components/map/map.recipe';
import { Search } from '@/components/ui/common/textfields';

import { css } from '@root/styled-system/css';

function MapSearchBar() {
  return (
    <>
      <div
        className={css({
          flex: 1,
          marginLeft: 10,
          paddingX: 3,
          textAlign: 'center',
        })}
      >
        <Search placeholder="Search" />
      </div>
      <div className={iconWrapper()}>
        <GpsLocationIcon fill="#707070" />
      </div>
    </>
  );
}

export default MapSearchBar;
