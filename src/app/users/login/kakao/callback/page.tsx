'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { postKakaoLoginCode } from '@/app/api/login/loginApi';
import { SpinnerMessage } from '@/components/ui/common/loading/SpinnerMessage';
import { useAuthStore } from '@/store/useAuthStore';

export default function KakaoCallbackPage() {
  const params = useSearchParams();
  const router = useRouter();
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    const code = params.get('code');
    if (!code) return;

    postKakaoLoginCode(code)
      .then(({ token, user }) => {
        setAuth(user, token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        router.push('/');
      })
      .catch(err => {
        console.error('카카오 로그인 실패:', err);
      });
  }, [params]);

  return (
    <div>
      <SpinnerMessage message="로그인 중입니다..." />
    </div>
  );
}
