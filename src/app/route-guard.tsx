"use client";

import { HandleAuthSession } from "@/services/auth/handleAuthSession";
import { selectIsAuthenticated } from "@/store/auth/authSlice";
import { useAppSelector } from "@/store/hooks";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import LoadingScreen from "@/components/ui/LoadingScreen";

type Props = { children: React.ReactNode };

export default function RouteGuard({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthStore = useAppSelector(selectIsAuthenticated);
  const [checked, setChecked] = useState(false);

  // Fall back to localStorage to avoid flicker before Redux hydration
  const isAuth = useMemo(() => {
    const handleAuthSession = new HandleAuthSession();
    return handleAuthSession.isAuth({ isAuthStore });
  }, [isAuthStore]);

  useEffect(() => {
    // Allow all auth routes for guests; block them for authed users
    const isAuthRoute = pathname?.startsWith("/auth");
    if (!pathname) return;

    if (isAuth) {
      if (isAuthRoute) router.replace("/");
      setChecked(true);
      return;
    }

    // Not authenticated: allow only auth routes, otherwise send to login
    if (!isAuth) {
      if (!isAuthRoute) router.replace("/auth/login");
      else setChecked(true);
    }
  }, [isAuth, pathname, router]);

  // Render children when ready; otherwise show a pleasant loader
  return checked ? <>{children}</> : <LoadingScreen />;
}
