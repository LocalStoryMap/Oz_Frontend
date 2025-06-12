export const NAVIGATE_MENU = [
  { title: '스토리', path: '/story' },
  { title: '구독', path: '/subscribe' },
  { title: '지도', path: '/map' },
];

export const AUTH_MENU = (isMobile: boolean, isLoggedIn: boolean) => {
  const loginBtn = {
    title: '로그인',
    path: '/login',
  };

  const logoutBtn = {
    title: '로그아웃',
    path: '/login',
  };

  if (isMobile) {
    return [isLoggedIn ? logoutBtn : loginBtn];
  }

  return isLoggedIn
    ? [...NAVIGATE_MENU, { title: '마이 페이지', path: '/' }]
    : [...NAVIGATE_MENU];
};
