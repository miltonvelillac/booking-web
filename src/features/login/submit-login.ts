import { Dispatch, SetStateAction } from "react";
import { validateLogin } from "./validate-login";
import { api } from "@/services/apiClient";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type LoginFields = { email: string; password: string };
export type LoginStates = { setErrors: Dispatch<SetStateAction<{ email?: string;password?: string;form?: string; }>>; setLoading: Dispatch<SetStateAction<boolean>> };
export type LoginErrors = { email?: string; password?: string };

export async function submitLogin(
    e: React.FormEvent,
    { email, password }: LoginFields,
    { setErrors, setLoading }: LoginStates,
    router: AppRouterInstance,
    t: (key: string, params?: Record<string, string | number>) => string
): Promise<void> {
    e.preventDefault();
    setErrors({});
    const nextErrors = validateLogin({ email, password }, t);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    try {
        setLoading(true);
        await api('/auth/login', { method: 'POST', body: { email, password } });
        router.push('/');
    } catch (err: any) {
        setErrors({ form: err?.message || t('login.error.generic') });
    } finally {
        setLoading(false);
    }
}