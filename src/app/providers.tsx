'use client';

import { I18nProvider } from '@/i18n';
import { HandleAuthSession } from '@/services/auth/handleAuthSession';
import { store } from '@/store/store';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import RouteGuard from './route-guard';

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  useEffect(() => {
    // Hydrate auth state from localStorage and persist on changes
    const hydrateAuthSession = new HandleAuthSession();
    hydrateAuthSession.hydrateSession();
    const unsubscribe = hydrateAuthSession.setSessionToStorage();
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <I18nProvider>
        <RouteGuard>{children}</RouteGuard>
      </I18nProvider>
    </Provider>
  );
}
