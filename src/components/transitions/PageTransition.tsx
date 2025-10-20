'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

type Delay = 0 | 75 | 100 | 150 | 200 | 300 | 500;

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: Delay;
};

export default function PageTransition({ children, className = '', delay }: Props) {
  const pathname = usePathname() || '';
  const delayClass = typeof delay === 'number' ? ` animate-delay-${delay}` : '';
  const cls = `animate-fade-in-up${delayClass} ${className}`.trim();
  return (
    <div key={pathname} className={cls}>
      {children}
    </div>
  );
}

