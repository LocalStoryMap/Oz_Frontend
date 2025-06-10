'use client';

import React from 'react';
import useScrollTop from '@hooks/useScrollTop';

import { css } from '@root/styled-system/css';

function ScrollToTopButton() {
  const { showButton, scrollToTop } = useScrollTop();

  return (
    showButton && (
      <button
        type="button"
        aria-label="맨 위로 스크롤"
        className={css({
          position: 'fixed',
          p: 4,
          bg: 'black',
          color: 'white',
          borderRadius: 'full',
          zIndex: 10,
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
          bottom: '20px',
          right: '1rem',
          transform: 'translateZ(0)',
          _active: {
            WebkitTapHighlightColor: 'transparent',
          },
        })}
        onClick={scrollToTop}
      >
        Top
      </button>
    )
  );
}

export default ScrollToTopButton;
