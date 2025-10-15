"use client";

import React, { useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { navigateService } from './navigateService';

type Props = { children: React.ReactNode };

export function NavigateProvider({ children }: Props) {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    navigateService.init(router);
    setReady(true);
  }, [router]);

  if (!ready) return null;
  return <>{children}</>;
}

export default NavigateProvider;




