'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import React from 'react';
import { I18nProvider } from '@/i18n';

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <I18nProvider>{children}</I18nProvider>
    </Provider>
  );
}
