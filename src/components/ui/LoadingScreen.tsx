"use client";

import React from "react";
import { useI18n } from "@/i18n";

export default function LoadingScreen() {
  const { t } = useI18n();
  const message = t('common.loadingApp');
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3" role="status" aria-live="polite" aria-busy="true">
        <span
          aria-hidden
          className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin"
        />
        <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>
        <span className="sr-only">{t('common.loading')}</span>
      </div>
    </div>
  );
}
