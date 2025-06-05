import { GpsLocationIcon } from '@/components/icons';
import { iconWrapper } from '@/components/map/map.recipe';
import PageHeader from '@/components/ui/common/pageHeader/PageHeader';
import { Search } from '@/components/ui/common/textfield';

import { css } from '@root/styled-system/css';

function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader>
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
      </PageHeader>
      <div className={css({ width: 'full', overflow: 'auto', marginTop: 3 })}>
        {children}
      </div>
    </>
  );
}

export default layout;
