export const ENDPOINTS = {
  AI: {
    CHAT: '/Ai/chat/',
    SUMMARY: '/Ai/summarize/',
  },
  FOLLOWS: {
    LIST: '/follows/', // get, post
    DETAIL: (id: number) => `/follows/${id}/`, // get, delete
  },
  SUBSCRIBE: {
    LIST: '/subscribes/', // get, post
    DETAIL: (id: number) => `/subscribes/${id}/`, // get, delete
  },
  NOTIFICATIONS: {
    LIST: '/notifications/', // get, post
    DETAIL: (id: number) => `/notifications/${id}/`, // get, delete
  },
  SEARCH: {
    LIST: '/api/search/',
    SUGGEST: '/api/search/suggestions/',
  },
  SEARCH_HISTORY: {
    LIST: '/search/history/', // get, post
    DETAIL: (id: number) => `/search/history/${id}/`, // get, delete
  },
  TOKEN: '/token/',
  USERS: {
    GOOGLE: '/users/login/google/',
    KAKAO: '/users/login/kakao/',
    LOGOUT: '/users/logout/',
    WITHDRAW: '/users/withdraw/',
    ME: '/users/me/', // get, put, patch
  },
  STORY: {
    LIST: '/api/stories/', // get, post
    DETAIL: (id: number) => `/api/stories/${id}/`, // get, put, delete
  },
  STORY_IMAGE: {
    UPLOAD: '/api/images/',
    DELETE: (id: number) => `/api/images/${id}/`,
    LIST: (id: number) => `/api/stories/${id}/images/`,
  },
  COMMENT: {
    LIST: (id: number) => `/api/stories/${id}/comments/`, // get, post
    DETAIL: (storyId: number, commentId: number) =>
      `/api/stories/${storyId}/comments/${commentId}/`, // get, put, delete
    IMAGE: (storyId: number, commentId: number) =>
      `/api/stories/${storyId}/comments/${commentId}/images/`, // get, post,
  },
  BOOKMARK: {
    LIST: '/bookmarks/', // get, post
    DETAIL: (id: number) => `/bookmarks/${id}/`,
  },
  MARKER: {
    LIST: '/markers/', // get, post
    DETAIL: (id: number) => `/markers/${id}/`, // get, put, delete
    LIKE: (id: number) => `/api/markers/${id}/likes/`, // get, post, delete
  },
  ROUTE: {
    LIST: '/routes/', // get, post
    DETAIL: (id: number) => `/routes/${id}/`, // get, put, delete
    LIKE: (id: number) => `/routes/${id}/likes/`, // get, post, delete
  },
  ROUTEMARKER: {
    LIST: '/api/route-markers/', // get, post
    DETAIL: (id: number) => `/api/route-markers/${id}/`, // put, delete
    UPDATE: '/api/route-markers/bulk-update/',
  },
  PAYMENT: {
    LIST: '/payments/', // get, post
    DETAIL: (id: number) => `/payments/${id}/`, // get, delete
  },
};
