'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { CloseIcon, LogoIcon, MenuIcon } from '@components/icons';
import {
  dimOverlay,
  headerWrapper,
  navMenu,
  navWrapper,
} from '@components/layouts/header.recipe';

import { useAuthStore } from '@/store/useAuthStore';

import { css } from '@root/styled-system/css';

const Header = () => {
  const router = useRouter();
  const user = useAuthStore(state => state.user);
  const clearAuth = useAuthStore(state => state.clearAuth);

  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 디바이스 감지
  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleLogout = () => {
    clearAuth();
    localStorage.clear();
    router.push('/login');
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const onClick = () => setIsMenuOpen(prev => !prev);
  const onClose = () => {
    if (window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { title: '스토리', path: '/story' },
    { title: '구독', path: '/' },
    { title: '지도', path: '/map' },
    ...(user ? [{ title: '마이 페이지', path: '/' }] : []),
  ];

  const AuthButton = (
    <button type="button" onClick={user ? handleLogout : handleLogin}>
      {user ? '로그아웃' : '로그인'}
    </button>
  );

  return (
    <header className={css({ paddingTop: '4' })}>
      {isMenuOpen && <div className={dimOverlay()} onClick={onClick} />}

      <nav className={navWrapper()}>
        <div className={headerWrapper()}>
          <Link href="/" onClick={onClose} passHref>
            <LogoIcon width={150} color="black" />
          </Link>

          {/* 모바일: 햄버거 버튼 왼쪽에 로그인/로그아웃 */}
          {isMobile && AuthButton}

          <ul className={navMenu({ isOpen: isMenuOpen })}>
            {menuItems.map(menu => (
              <li key={menu.title}>
                <Link
                  href={menu.path}
                  onClick={onClose}
                  className={css({ display: 'block', width: '100%' })}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* PC: 메뉴 오른쪽에 로그인/로그아웃 */}
          {!isMobile && AuthButton}

          <button
            type="button"
            onClick={onClick}
            aria-label="메뉴 열기 또는 닫기"
            className={css({
              display: {
                base: 'block',
                md: 'none',
              },
              cursor: 'pointer',
              marginLeft: '4',
            })}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
