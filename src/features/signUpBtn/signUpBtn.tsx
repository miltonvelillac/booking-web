"use client";

import React from "react";
import { useI18n } from "@/i18n";
import { navigateService } from "@/services/navigate/navigateService";

export default function SignUpBtn() {
    const { t } = useI18n();
    const label = t('login.signup');

    return (
        <button
            type="button"
            onClick={() => navigateService.goToSignIn()}
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
        >
            {label}
        </button>
    );
}
