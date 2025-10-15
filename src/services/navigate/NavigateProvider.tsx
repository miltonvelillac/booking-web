"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { navigateService } from './navigateService';

type Props = { children: React.ReactNode };

export function NavigateProvider({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    navigateService.init(router);
  }, [router]);

  return <>{children}</>;
}

export default NavigateProvider;

