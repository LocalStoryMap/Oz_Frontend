'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { deleteBookmark, getBookmarks } from '@/app/api/mypage/bookmarkApi';
import SquareCard from '@/components/ui/common/cards/SquareCard';
import { BookmarkListResponse, BookmarkWithStory } from '@/types/bookmark';

import { css } from '@root/styled-system/css';

export default function BookmarkPage() {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState<BookmarkWithStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchBookmarks = useCallback(async () => {
    try {
      setLoading(true);
      const fetchFunction = getBookmarks(page);
      const response = await fetchFunction();

      let bookmarkData: BookmarkWithStory[] = [];

      if (Array.isArray(response)) {
        bookmarkData = response;
      } else if (response && 'results' in response) {
        bookmarkData = (response as BookmarkListResponse).results || [];
      }

      if (page === 1) {
        setBookmarks(bookmarkData);
      } else {
        setBookmarks(prev => [...prev, ...bookmarkData]);
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('북마크 불러오기 실패:', error);
      }
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const handleToggleLike = async (bookmarkId: number) => {
    try {
      await deleteBookmark(bookmarkId);
      setBookmarks(prev => prev.filter(item => item.id !== bookmarkId));
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('북마크 삭제 실패:', error);
      }
    }
  };

  if (loading && page === 1) {
    return (
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
        })}
      >
        <p className={css({ textStyle: 'body2', color: 'gray.500' })}>
          로딩 중...
        </p>
      </div>
    );
  }

  if (bookmarks.length === 0 && !loading) {
    return (
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '400px',
          gap: '16px',
        })}
      >
        <p className={css({ textStyle: 'body2', color: 'gray.500' })}>
          아직 북마크한 스토리가 없습니다.
        </p>
        <button
          type="button"
          onClick={() => router.push('/map')}
          className={css({
            padding: '12px 24px',
            backgroundColor: 'primary',
            color: 'onPrimary',
            borderRadius: 'md',
            cursor: 'pointer',
            textStyle: 'label2',
            transition: 'all 0.2s',
            _hover: {
              opacity: 0.9,
              transform: 'translateY(-1px)',
            },
          })}
        >
          지도 둘러보기
        </button>
      </div>
    );
  }

  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: {
          base: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        gap: '24px', // 여기 직접 숫자로 고정
        padding: '16px', // 이것도 확실하게 고정
      })}
    >
      {bookmarks.map(bookmark => {
        const story = bookmark.storyDetail;
        const marker = story?.marker;
        const image =
          story?.images?.[0]?.image || '/images/default-thumbnail.png';
        const title = marker?.place_name || story?.title || '제목 없음';
        const location = marker?.address || story?.address || '';

        return (
          <SquareCard
            key={bookmark.id}
            id={bookmark.id}
            image={image}
            liked
            title={title}
            location={location}
            onClick={() => router.push(`/story/${story?.id ?? bookmark.story}`)}
            onToggle={() => handleToggleLike(bookmark.id)}
          />
        );
      })}
    </div>
  );
}
