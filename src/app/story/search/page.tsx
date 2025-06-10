import { Suspense } from 'react';

import StoryPlaceList from '@/components/story/StoryPlaceList';
import PageHeader from '@/components/ui/common/pageHeader/PageHeader';

function page() {
  return (
    <>
      <PageHeader title="스토리" />
      <Suspense fallback={<div>로딩 중</div>}>
        <StoryPlaceList />
      </Suspense>
    </>
  );
}

export default page;
