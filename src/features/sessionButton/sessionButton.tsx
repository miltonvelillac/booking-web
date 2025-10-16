"use client";

import { useI18n } from "@/i18n";
import { navigateService } from "@/services/navigate/navigateService";
import { signUpService } from "@/services/signUp/signUpService";
import { clearSession, selectIsAuthenticated } from "@/store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export default function SessionBtn() {
  const { t } = useI18n();
  const pathname = usePathname();
  const isAuth = useAppSelector(selectIsAuthenticated);
  const dispatch = useAppDispatch();

  const label = signUpService.getSessionBtnLabel(pathname, isAuth, t);

  const onClick = () => {
    const showSignUp = signUpService.showSignUpBtn(pathname);
    const showSignOut = signUpService.showLogoutBtn(pathname, isAuth);
    const showLogInt = signUpService.showLogIntBtn(pathname, isAuth);

    if (showLogInt) {
      navigateService.goToLogin();
    } else if (showSignOut) {
      signUpService.logout();
      dispatch(clearSession());
      navigateService.goToLogin();
    } else if (showSignUp) {
      navigateService.goToSignIn();
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
