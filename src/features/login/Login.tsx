'use client';

import { Button } from '@/components/ui';
import { InputEmail } from '@/components/ui/InputEmail';
import { InputPassword } from '@/components/ui/InputPassword';
import Label from '@/components/ui/Label';
import LinkElement from '@/components/ui/Link';
import { useI18n } from '@/i18n';
import { api } from '@/services/apiClient';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login() {
    const { t } = useI18n();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setErrors({ ...errors, email: '' });
    }, [email]);
    useEffect(() => {
        setErrors({ ...errors, password: '' });
    }, [password]);

    const validate = () => {
        const next: { email?: string; password?: string } = {};
        const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        if (!email) next.email = t('login.error.emailRequired');
        else if (!emailPattern.test(email)) next.email = t('login.error.emailInvalid');
        if (!password) next.password = t('login.error.passwordRequired');
        else if (password.length < 6) next.password = t('login.error.passwordMin', { min: 6 });
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});
        if (!validate()) return;
        try {
            setLoading(true);
            await api('/auth/login', { method: 'POST', body: { email, password } });
            router.push('/');
        } catch (err: any) {
            setErrors({ form: err?.message || t('login.error.generic') });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="w-full max-w-md mx-auto">
            <div className='bg-white dark:bg-background/80 rounded-xl shadow-lg p-8'>
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('login.title')}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">{t('login.subtitle')}</p>
                </div>
            </div>
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
                <section>
                    <Label label={t('login.emailLabel')} forInput='email' id='emailLabel' />
                    <InputEmail
                        id="email"
                        name="email"
                        placeholder={t('login.emailPlaceholder')}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onClear={() => setEmail('')}
                        error={errors.email}
                        autoComplete="email"
                    />
                </section>
                <section>
                    <div className="flex items-center justify-between mb-2">
                        <Label label={t('login.passwordLabel')} forInput='password' id='passwordLabel' />
                        <LinkElement id='forgotPassword' label={t('login.forgotPassword')} href='#' />
                    </div>
                    <InputPassword
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={errors.password}
                        autoComplete="current-password"
                    />
                </section>
                {errors.form && (
                    <p className="text-sm text-red-600">{errors.form}</p>
                )}
                <div>
                    <Button label={loading ? t('login.loading') : t('login.submit')} type="submit" disabled={loading} />
                </div>
            </form>
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    {t('login.noAccount')}
                    <LinkElement id='signupLink' label={t('login.signup')} href='#' />
                </p>
            </div>
        </section>
    );
}

