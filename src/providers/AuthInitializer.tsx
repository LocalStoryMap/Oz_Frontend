'use client';

import { useEffect } from 'react';

import { useAuthStore } from '@/store/useAuthStore';

export default function AuthInitializer() {
  const setAuth = useAuthStore(state => state.setAuth);

  useEffect(() => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user && token) {
      setAuth(JSON.parse(user), token);
    }
  }, []);

  return null;
}
