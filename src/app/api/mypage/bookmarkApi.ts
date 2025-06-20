import { ENDPOINTS } from '@/api/endpoints';
import { mutationFetcher, queryFetcher } from '@/api/fetcher';
import { Bookmark, BookmarkWithStory } from '@/types/bookmark';

// 북마크 목록 조회 - API가 배열을 직접 반환하는 경우
export const getBookmarks = (page: number = 1) => {
  return queryFetcher<BookmarkWithStory[]>( // 배열로 변경
    `${ENDPOINTS.BOOKMARK.LIST}?page=${page}`,
  );
};

// 북마크 추가
export const addBookmark = async (storyId: number): Promise<Bookmark> => {
  return mutationFetcher<Bookmark>('post', ENDPOINTS.BOOKMARK.LIST, {
    story: storyId,
  });
};

// 북마크 삭제
export const deleteBookmark = async (bookmarkId: number): Promise<void> => {
  return mutationFetcher('delete', ENDPOINTS.BOOKMARK.DETAIL(bookmarkId));
};
