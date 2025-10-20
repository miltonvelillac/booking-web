'use client';

import { Button, Label } from '@/components/ui';
import { InputEmail } from '@/components/ui/InputEmail';
import InputPassword from '@/components/ui/InputPassword';
import { useI18n } from '@/i18n';
import React, { useEffect, useState } from 'react';
import { validateLogin } from '../login/validate-login';
import Subtitle from '@/components/ui/SubTitle';
import Title from '@/components/ui/Title';

export default function Sign() {
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; repeatedPassword?: string; form?: string }>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { email: emailError } = validateLogin({ email, password }, t);
    if (!emailError || !email) setErrors({ ...errors, email: '' });
  }, [email]);
  
  useEffect(() => {
    const { password: passwordError } = validateLogin({ email, password }, t);
    if (!passwordError || !password) setErrors({ ...errors, password: '' });
  }, [password]);

  useEffect(() => {
    if (repeatedPassword === password) setErrors({ ...errors, password: '' });
  }, [repeatedPassword]);

  const disableFields = () => loading;
  const handleLoginSubmit = async (e: React.FormEvent): Promise<void> => {
    setLoading(true);
  };

  return (
    <section className="w-full max-w-md mx-auto">
      <div>
          <div className="text-center mb-8">
              <Title label={t('signup.title')}/>
              <Subtitle label={t('signup.subtitle')}/>
          </div>
        </div>
      <form className='flex flex-col gap-5'>
        <section>
          <Label label={t('signup.emailLabel')} forInput='email' id='emailLabel' />
          <InputEmail
            autoFocus
            id='email'
            name='email'
            placeholder={t('signup.emailPlaceholder')}
            value={email}
            disabled={disableFields()}
            tabIndex={1}
            error={errors.email}
            onChange={(e) => { setEmail(e.target.value) }}
            onClear={() => { setEmail('') }}
          />
        </section>
        <section>
          <Label label={t('signup.passwordLabel')} forInput='password' id='passwordLabel' />
          <InputPassword
            id="password"
            name="password"
            placeholder="••••••••"
            value={password}
            disabled={disableFields()}
            error={errors.password}
            autoComplete="current-password"
            tabIndex={2}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </section>
        <section>
          <Label label={t('signup.passwordRepeatLabel')} forInput='passwordRepeated' id='passwordRepeatLabel' />
          <InputPassword
            id="passwordRepeated"
            name="password"
            placeholder="••••••••"
            value={repeatedPassword}
            disabled={disableFields()}
            error={errors.repeatedPassword}
            autoComplete="current-password"
            tabIndex={3}
            onChange={(e) => { setRepeatedPassword(e.target.value) }}
          />
        </section>
        <div className='mt-5'>
          <Button onClick={handleLoginSubmit} label={loading ? t('common.loading') : t('signup.submit')} type="button" disabled={loading} tabIndex={4} />
        </div>
      </form>
    </section>
  );
}

