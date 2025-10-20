'use client';

import { Button } from '@/components/ui';
import { InputEmail } from '@/components/ui/InputEmail';
import { InputPassword } from '@/components/ui/InputPassword';
import Label from '@/components/ui/Label';
import LinkElement from '@/components/ui/Link';
import { useI18n } from '@/i18n';
import { navigateService } from '@/services/navigate/navigateService';
import { useAppDispatch } from '@/store/hooks';
import { useEffect, useState } from 'react';
import { submitLogin } from './submit-login';
import { validateLogin } from './validate-login';
import Subtitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';

export default function Login() {
    const { t } = useI18n();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const { email: emailError } = validateLogin({ email, password}, t);
        if(!emailError || !email) setErrors({ ...errors, email: '' });
    }, [email]);
    useEffect(() => {
        const { password: passwordError } = validateLogin({ email, password}, t);
        if(!passwordError || !password) setErrors({ ...errors, password: '' });
    }, [password]);

    const handleLoginSubmit = async (e: React.FormEvent): Promise<void> =>
        submitLogin(e, { email, password }, { setErrors, setLoading }, t, dispatch);

    const disableFields = () => loading;

    return (
        <section className="w-full max-w-md mx-auto animate-fade-in-up">
            <div className='bg-white dark:bg-background/80 rounded-xl shadow-lg p-8'>
                <div className="text-center mb-8">
                    <Title label={t('login.title')}/>
                    <Subtitle label={t('login.subtitle')}/>
                </div>
            </div>
            <form className="space-y-6" onSubmit={handleLoginSubmit} noValidate>
                <section>
                    <Label label={t('login.emailLabel')} forInput='email' id='emailLabel' />
                    <InputEmail
                        id="email"
                        name="email"
                        placeholder={t('login.emailPlaceholder')}
                        value={email}
                        disabled={disableFields()}
                        error={errors.email}
                        autoComplete="email"
                        onChange={(e) => { setEmail(e.target.value) }}
                        onClear={() => { setEmail('') }}
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
                        disabled={disableFields()}
                        error={errors.password}
                        autoComplete="current-password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </section>
                {errors.form && (
                    <p className="text-sm text-red-600">{errors.form}</p>
                )}
                <div>
                    <Button label={loading ? t('common.loading') : t('login.submit')} type="submit" disabled={loading} />
                </div>
            </form>
            <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 flex flex-row justify-center gap-2">
                    {t('login.noAccount')}
                    <LinkElement
                      id='signupLink'
                      label={t('login.signup')}
                      href="#"
                      onClick={(e) => { e.preventDefault(); navigateService.goToSignIn(); }}
                    />
                </p>
            </div>
        </section>
    );
}
