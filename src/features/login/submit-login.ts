import { AuthApi } from "@/services/api/loginApi/loginApi";
import { setError as authError, setLoading as authLoading, setSession } from "@/store/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Dispatch, SetStateAction } from "react";
import { validateLogin } from "./validate-login";

export type LoginFields = { email: string; password: string };
export type LoginStates = { setErrors: Dispatch<SetStateAction<{ email?: string;password?: string;form?: string; }>>; setLoading: Dispatch<SetStateAction<boolean>> };
export type LoginErrors = { email?: string; password?: string };

export async function submitLogin(
    e: React.FormEvent,
    { email, password }: LoginFields,
    { setErrors, setLoading }: LoginStates,
    router: AppRouterInstance,
    t: (key: string, params?: Record<string, string | number>) => string,
    dispatch: AppDispatch
): Promise<void> {
    e.preventDefault();
    setErrors({});
    const nextErrors = validateLogin({ email, password }, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    try {
        setLoading(true);
        dispatch(authLoading());
        const authApi = new AuthApi();
        const user = await authApi.loginApi({ email, password });
        if (!user?.token) throw new Error('Missing token');
        dispatch(setSession({ user }));
        router.push('/');
    } catch (err: any) {
        const msg = err?.message || t('login.error.generic');
        setErrors({ form: msg });
        dispatch(authError(msg));
    } finally {
        setLoading(false);
    }
}
